"use client";
import Agency1icon from "@/svg/Agency1";
import Agency2icon from "@/svg/Agency2";
import Agency3icon from "@/svg/Agency3";
import { DM_Sans } from "next/font/google";
import React from "react";
import { motion } from "framer-motion";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const RightAgency = () => {
  return (
    <>
      <div className="right-agency">
        <motion.div
          whileHover={{ marginLeft: 50 }}
          className="right-agency-inner d-flex"
        >
          <div className="agency-inner-left">
            <div className="agency-icon">
              <Agency1icon />
            </div>
          </div>
          <div className="agency-inner-right">
            <h3 className={DmSans.className}>Web Development</h3>
            <p className={DmSans.className}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ marginLeft: 50 }}
          className="right-agency-inner d-flex"
        >
          <div className="agency-inner-left">
            <div className="agency-icon">
              <Agency2icon />
            </div>
          </div>
          <div className="agency-inner-right">
            <h3 className={DmSans.className}>Product Design & Development</h3>
            <p className={DmSans.className}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ marginLeft: 50 }}
          className="right-agency-inner d-flex"
        >
          <div className="agency-inner-left">
            <div className="agency-icon">
              <Agency3icon />
            </div>
          </div>
          <div className="agency-inner-right">
            <h3 className={DmSans.className}>Graphic Design</h3>
            <p className={DmSans.className}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default RightAgency;
