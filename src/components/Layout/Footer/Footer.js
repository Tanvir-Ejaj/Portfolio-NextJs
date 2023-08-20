"use client";
import Logo from "@/svg/Logo";
import React from "react";
import { DM_Sans, Open_Sans } from "next/font/google";
import Link from "next/link";
import { ResourceData, ServiceData } from "./footerData";
import { LuSend } from "react-icons/lu";
import FacebookIcon from "@/svg/Facebook";
import InstagarmIcon from "@/svg/Instagarm";
import TwitterIcon from "@/svg/Twiteer";
import PintarestIcon from "@/svg/Pintarest";
import { motion } from "framer-motion";
import Copyright from "./Copyright";

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
});

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
});

const Footer = () => {
  return (
    <>
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Link href="/">
                <Logo />
              </Link>
              <p className={OpenSans.className + " " + "footer-text"}>
                There are many variations of passages of available, but the
                majority have suffered.
              </p>
            </div>
            <div className="col-lg-3">
              <div className="footer-content">
                <h3 className={DmSans.className}>Service</h3>
                {ServiceData.map((data, i) => (
                  <Link className={DmSans.className} href={data.url} key={i}>
                    {data.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-content">
                <h3 className={DmSans.className}>Resource</h3>
                {ResourceData.map((data, i) => (
                  <Link className={DmSans.className} href={data.url} key={i}>
                    {data.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-content">
                <h3>Newsletter</h3>
                <p className={OpenSans.className + " "}>
                  Subscribe for our upcoming latest address and resources
                </p>
              </div>
              <div className="subs-form">
                <input
                  className={DmSans.className}
                  type="email"
                  placeholder="email"
                />
                <button>
                  <LuSend />
                </button>
              </div>
              <div className="contact-icons">
                <motion.div
                  className="icon-shape"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                >
                  <Link href="/">
                    <FacebookIcon />
                  </Link>
                </motion.div>
                <motion.div
                  className="icon-shape"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                >
                  <Link href="/">
                    <InstagarmIcon />
                  </Link>
                </motion.div>
                <motion.div
                  className="icon-shape"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                >
                  <Link href="/">
                    <TwitterIcon />
                  </Link>
                </motion.div>
                <motion.div
                  className="icon-shape"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                >
                  <Link href="/">
                    <PintarestIcon />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default Footer;
