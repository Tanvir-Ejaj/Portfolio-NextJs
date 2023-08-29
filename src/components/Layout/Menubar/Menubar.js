"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./../../../svg/Logo";
import Menudata from "@/data/Menudata";
import { DM_Sans } from "next/font/google";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaBarsStaggered } from "react-icons/fa6";
import { HiXMark } from "react-icons/hi2";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

const Menubar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const [showSideBar, setShowSideBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        className={
          showNavbar ? "stickynav d-none d-lg-block" : " d-none d-lg-block"
        }
      >
        <Container>
          <Link href="/">
            <Logo />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              {Menudata?.map((menu, i) => (
                <Link
                  href={menu.url}
                  key={i}
                  className={DmSans.className + " " + "mx-3"}
                >
                  {menu.title}
                </Link>
              ))}
            </Nav>
            <motion.button
              className={DmSans.className + " " + "nav-btn"}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.8 }}
            >
              Contact Now
            </motion.button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        className={showNavbar ? "sidebar stickynav" : "sidebar d-lg-none py-3"}
      >
        <div className="container">
          <div className="sidebar-inner d-flex justify-content-between align-items-center py-3">
            <Link href="/">
              <Logo />
            </Link>
            <motion.div className="sidebar-bars" whileTap={{ scale: 0.8 }} onClick={() => setShowSideBar(true)}>
              <FaBarsStaggered />
            </motion.div>
          </div>
        </div>
        <motion.div
          className="sidebar-links"
          animate={{
            left: showSideBar ? "0" : "100%",
          }}
        >
          <motion.div className="cross-btn" whileTap={{ scale: 0.8 }} onClick={() => setShowSideBar(false)}>
            <HiXMark />
          </motion.div>
          <ul>
            {Menudata?.map((menu, i) => (
              <>
                <li>
                  <Link href={menu.url} key={i} className={DmSans.className}>
                    {menu.title}
                  </Link>
                </li>
              </>
            ))}
          </ul>
          <motion.button
            className={DmSans.className + " " + "nav-btn"}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.8 }}
          >
            Contact Now
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default Menubar;
