"use client";
import { DM_Sans } from "next/font/google";
import React from "react";
import { motion } from "framer-motion";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const LeftAgency = () => {
  const Animation = {
    hidden: {
      x: -30,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <motion.div
        className="left-agency"
        initial="hidden"
        whileInView="visible"
        variants={Animation}
        viewport={{
          once: true,
        }}
        transition={{
          staggerChildren: 0.2,
          duration: 0.2,
          ease: "easeInOut",
        }}
      >
        <h3 className={DmSans.className}>
          I <span>Run</span> Agency <span>Smartly</span> With My{" "}
          <span>Team</span> Member.
        </h3>
        <p className={DmSans.className}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look.
        </p>
        <motion.button
          className={DmSans.className}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
        >
          Say Hello
        </motion.button>
      </motion.div>
    </>
  );
};

export default LeftAgency;
