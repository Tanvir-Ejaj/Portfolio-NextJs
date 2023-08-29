"use client";
import BlogData from "@/data/BlogData";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { DM_Sans } from "next/font/google";
import PrevArrow from "../Arrows/PrevArrow";
import NextArrow from "../Arrows/NextArrow";
import { SlCalender } from "react-icons/sl";
import { motion } from "framer-motion";

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
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

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
      <Slider className="slider-main" {...settings}>
        {BlogData.map((data, i) => (
          <>
            <motion.div
              className="blog-inner"
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
              key={i}
            >
              <Image
                src={data.photo}
                alt="aa"
                height={220}
                width={320}
                loading="lazy"
              />
              <p className={DmSans.className}>
                <SlCalender /> {data.date}
              </p>
              <h3 className={DmSans.className}>
                <Link href={data.url}>{data.heading}</Link>
              </h3>
              <Link className={DmSans.className} href={data.url}>
                {data.btn}
              </Link>
            </motion.div>
          </>
        ))}
      </Slider>
    </>
  );
};

export default BlogSlider;
