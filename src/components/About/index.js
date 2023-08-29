"use client";
import React, { useState } from "react";
import { DM_Sans } from "next/font/google";
import { motion } from "framer-motion";
import AboutData from "./../../data/AboutData";
import ShowData from "./ShowData";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const About = () => {
  const Animation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  const [active, setActive] = useState(0);

  const handleActive = (i) => {
    setActive(i);
  };

  return (
    <>
      <div className="about">
        <div className="container">
          <motion.div
            className="about-top"
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
          >
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="about-top-left">
                  <h2 className={DmSans.className}>
                    Failure is The Power that Gives <span>Success</span>
                  </h2>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about-top-right">
                  <p className={DmSans.className}>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised.
                  </p>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.5 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className={DmSans.className}
                  >
                    Download Now
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="about-info">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-6">
                <motion.div
                  className="about-info-left"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={Animation}
                  transition={{
                    staggerChildren: 0.2,
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                >
                  <div className="row">
                    {AboutData.map((data, i) => (
                      <>
                        <div className="col-lg-6 col-sm-6 mb-4">
                          <div
                            className={
                              active === i
                                ? "about-inner-text active"
                                : "about-inner-text"
                            }
                            onClick={() => handleActive(i)}
                            key={i}
                          >
                            <h3 className={DmSans.className} key={i}>
                              {data.heading}
                            </h3>
                            <p className={DmSans.className}>
                              {data.text}
                            </p>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </motion.div>
              </div>
              <div className="col-lg-5">
                <div className="about-info-right">
                  {active === 0 && (
                    <ShowData
                      title="Get So Many Awards
                    In 5 years"
                      para="There are many variations of passages of Lorem Ipsum available, but the majority."
                      btn="Visit Now"
                    />
                  )}
                  {active === 1 && (
                    <ShowData
                      title="Get So Many Awards
                    In 2 years"
                      para="There are many variations of passages of Lorem Ipsum available, but the majority."
                      btn="Visit Now"
                    />
                  )}
                  {active === 2 && (
                    <ShowData
                      title="Get So Many Awards
                    In 3 years"
                      para="There are many variations of passages of Lorem Ipsum available, but the majority."
                      btn="Visit Now"
                    />
                  )}
                  {active === 3 && (
                    <ShowData
                      title="Get So Many Awards
                    In 4 years"
                      para="There are many variations of passages of Lorem Ipsum available, but the majority."
                      btn="Visit Now"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
