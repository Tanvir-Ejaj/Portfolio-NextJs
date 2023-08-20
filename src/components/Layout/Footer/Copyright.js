import CopyFooter from "@/data/CopyrightData";
import Link from "next/link";
import React from "react";
import { Open_Sans } from "next/font/google";

const OpenSans = Open_Sans({
  subsets: ["latin"],
  weight: "400",
});

const Copyright = () => {
  return (
    <>
      <div className="copyright-main">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="copyright">
                {CopyFooter.map((data, i) => (
                  <Link
                    href={data.url}
                    key={i}
                    className={OpenSans.className + " " + "mx-3"}
                  >
                    {data.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Copyright;
