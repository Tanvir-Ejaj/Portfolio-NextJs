"use client";
import React from "react";
import BlogSlider from "./BlogSlider";
import { motion } from "framer-motion";

const Blog = () => {
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
      <div className="blog">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <motion.div
                className="heading"
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
                <h3>Latest Blog</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised.
                </p>
              </motion.div>
            </div>
          </div>
          <BlogSlider />
        </div>
      </div>
    </>
  );
};

export default Blog;
