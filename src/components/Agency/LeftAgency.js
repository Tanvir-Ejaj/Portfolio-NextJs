import { DM_Sans } from "next/font/google";
import React from "react";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const LeftAgency = () => {
  return (
    <>
      <div className="left-agency">
        <h3 className={DmSans.className}>
          I <span>Run</span> Agency <span>Smartly</span> With My{" "}
          <span>Team</span> Member.
        </h3>
        <p className={DmSans.className}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look.
        </p>
        <button className={DmSans.className}>Say Hello</button>
      </div>
    </>
  );
};

export default LeftAgency;
