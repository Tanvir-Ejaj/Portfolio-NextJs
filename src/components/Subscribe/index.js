import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { DM_Sans, Open_Sans } from "next/font/google";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Subscribe = () => {
  return (
    <>
      <div className="subscribe">
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
                  <button>
                    <BsArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
