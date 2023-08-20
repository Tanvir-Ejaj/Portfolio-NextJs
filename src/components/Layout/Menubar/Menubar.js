"use client";
import Link from "next/link";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./../../../svg/Logo";
import Menudata from "@/data/Menudata";
import { DM_Sans } from "next/font/google";
import { Button } from "react-bootstrap";
import { motion } from "framer-motion";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "400",
});

const Menubar = () => {
  return (
    <Navbar expand="lg" className="py-3">
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
          >
            Contact Now
          </motion.button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;
