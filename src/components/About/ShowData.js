import React from "react";
import { motion } from "framer-motion";

const ShowData = ({ title, para, btn }) => {
  const Animation = {
    hidden: {
      x: 30,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
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
    >
      <h3>{title}</h3>
      <p>{para}</p>
      <button>{btn}</button>
    </motion.div>
  );
};

export default ShowData;
