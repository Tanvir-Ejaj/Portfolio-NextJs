"use client";
import BlogData from "@/data/BlogData";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from "next/font/google";
import PrevArrow from "../Arrows/PrevArrow";
import NextArrow from "../Arrows/NextArrow";
import { SlCalender } from 'react-icons/sl';

const DmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const BlogSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
  };
  return (
    <>
      <Slider className="slider-main" {...settings}>
        {BlogData.map((data, i) => (
          <>
            <div className="blog-inner">
              <Image
                src={data.photo}
                alt="aa"
                height={220}
                width={320}
                loading="lazy"
              />
              <p className={DmSans.className}><SlCalender /> {data.date}</p>
              <h3 className={DmSans.className}>
                <Link href={data.url}>{data.heading}</Link>
              </h3>
              <Link className={DmSans.className} href={data.url}>
                {data.btn}
              </Link>
            </div>
          </>
        ))}
      </Slider>
    </>
  );
};

export default BlogSlider;
