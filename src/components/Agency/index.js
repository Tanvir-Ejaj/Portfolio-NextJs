"use client";
import React from "react";
import LeftAgency from "./LeftAgency";
import RightAgency from "./RightAgency";
import { motion } from "framer-motion";

const Agency = () => {
  const Animation = {
    hidden: {
      y: 50,
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
        className="agency"
        whileInView="visible"
        initial="hidden"
        variants={Animation}
        viewport={{
          once: true,
        }}
        transition={{
          staggerChildren: 0.2,
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <LeftAgency />
            </div>
            <div className="col-lg-6">
              <RightAgency />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Agency;
