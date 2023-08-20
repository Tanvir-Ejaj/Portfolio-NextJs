"use client";
import { BsArrowUpRight } from "react-icons/bs";
import { DM_Sans, Open_Sans } from "next/font/google";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import BehanceIcon from "./../../svg/Behance";
import DribbleIcon from './../../svg/Dribble';
import InstagarmIcon_2 from "@/svg/Instagarm2";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const HeroLeft = () => {
  return (
    <>
      <div className="hero-left-main">
        <h1 className={DmSans.className + " "}>
          <span>Creative </span> <span>Design</span>
          <span> and Work</span> <span>Solution</span>
        </h1>
        <p className={DmSans.className + " "}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered.
        </p>
        <div className="hero-btn">
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 200,
            }}
          >
            Say Hello
          </motion.button>
          <button>
            My Work <BsArrowUpRight />
          </button>
        </div>
        <div className="hero-icons d-flex align-items-center">
          <div className="icon-text">
            <p className={DmSans.className}>Follow me on</p>
          </div>
          <div className="hero-contact d-flex align-items-center">
            <Link href="/">
              <BehanceIcon />
            </Link>
            <Link href="/">
              <DribbleIcon />
            </Link>
            <Link href="/">
              <InstagarmIcon_2 />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroLeft;
