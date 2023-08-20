import Image from "next/image";
import React from "react";
import ExpImage from "../../images/person.webp";
import { DM_Sans } from "next/font/google";

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ExpLeft = () => {
  return (
    <>
      <div className="exp-pic">
        <Image src={ExpImage} width={496} height={596} alt="smith" />
        <div className="exp-img-text">
          <h3 className={DmSans.className}>5+</h3>
          <h3 className={DmSans.className}>Year</h3>
          <p className={DmSans.className}>Experience</p>
        </div>
      </div>
    </>
  );
};

export default ExpLeft;
