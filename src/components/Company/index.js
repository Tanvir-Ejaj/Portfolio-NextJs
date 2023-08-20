"use client"
import CompanyData from "@/data/CompanyData";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { DM_Sans } from 'next/font/google';

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: "700"
})

const Company = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <>
      <div className="company">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="company-heading">
                <h3 className={DmSans.className}>Reputed Partners</h3>
              </div>
            </div>
          </div>
          <Slider className="company-slider" {...settings}>
            {CompanyData.map((data, i) => (
              <>
                <div className="company-inner">
                  <Image src={data.photo} key={i} alt="brand" loading="lazy" height={134} width={253} />
                </div>
              </>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Company;
