"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { DM_Sans, Open_Sans } from "next/font/google";
import { motion } from "framer-motion";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Subscribe = () => {
  const Animation = {
    hidden: {
      y: 10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <motion.div
        className="subscribe"
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
        <div className="container">
          <div className="subscribe-inner">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <div className="subs-left">
                  <h3 className={DmSans.className}>
                    Subscirbe to Our Newsletter
                  </h3>
                  <p className={OpenSans.className}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority.
                  </p>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="subs-right">
                  <input
                    className={DmSans.className}
                    type="text"
                    placeholder="Email"
                  />
                  <motion.button
                    whileHover={{
                      scale: 0.9,
                      transition: { duration: 0.5 },
                    }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <BsArrowRight />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Subscribe;
