"use client";
import ExpData from "@/data/ExpData";
import { DM_Sans, Grechen_Fuemen, Open_Sans } from "next/font/google";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Grechen = Grechen_Fuemen({
  subsets: ["latin"],
  weight: ["400"],
});

const ExpRight = () => {
  return (
    <>
      <div className="exp-right">
        <h3>
          We <span>Run</span> Agency <span>Smartly</span> With Our{" "}
          <span>Team</span> Member.
        </h3>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look.
        </p>
        <div className="exp-data">
          {ExpData.map((data, i) => (
            <>
              <ul>
                <li key={i} className={DmSans.className}>
                  <AiOutlineCheck /> {data.text}
                </li>
              </ul>
            </>
          ))}
        </div>
        <motion.button
          className={OpenSans.className}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          Explore More
        </motion.button>
        <div className="counter">
          <div className="row text-center">
            <div className="col-lg-4">
              <div className="counter-inner">
                <CountUp
                  start={1}
                  end={30}
                  delay={0}
                  preserveValue={30}
                  suffix="+"
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                >
                  {({ countUpRef }) => (
                    <h3 className={Grechen.className} ref={countUpRef}></h3>
                  )}
                </CountUp>
                <p className={DmSans.className}>Team Members</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="counter-inner">
                <CountUp
                  start={1}
                  end={150}
                  delay={0}
                  preserveValue={150}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                >
                  {({ countUpRef }) => (
                    <h3 className={Grechen.className} ref={countUpRef}></h3>
                  )}
                </CountUp>
                <p className={DmSans.className}>Completed Projects</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="counter-inner">
                <CountUp
                  start={1}
                  end={50}
                  delay={0}
                  preserveValue={50}
                  suffix="+"
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                >
                  {({ countUpRef }) => (
                    <h3 className={Grechen.className} ref={countUpRef}></h3>
                  )}
                </CountUp>
                <p className={DmSans.className}>Satisfied Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpRight;
