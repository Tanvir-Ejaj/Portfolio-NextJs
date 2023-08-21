"use client";
import React from "react";
import ExpLeft from "./ExpLeft";
import ExpRight from "./ExpRight";
import { motion } from "framer-motion";

const Experience = () => {
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
        className="experience"
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
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <ExpLeft />
            </div>
            <div className="col-lg-6">
              <ExpRight />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Experience;
