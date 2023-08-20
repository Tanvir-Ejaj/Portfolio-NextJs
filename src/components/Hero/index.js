"use client";
import React from "react";
import HeroLeft from "./HeroLeft";
import HeroImage from "../../images/hero.webp";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
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
        initial="hidden"
        whileInView="visible"
        variants={Animation}
        viewport={{
          once: true,
        }}
        transition={{
          staggerChildren: 0.2,
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="hero-main"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <HeroLeft />
            </div>
            <div className="col-lg-5">
              <div className="hero-image">
                <Image
                  src={HeroImage}
                  alt="banner-image"
                  width={400}
                  height={400}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
