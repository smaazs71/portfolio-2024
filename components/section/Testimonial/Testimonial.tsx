"use client";

import React, { LegacyRef, useMemo, useState } from "react";

import Slider, { Settings } from "react-slick";
import Image from "next/image";
import { listTestimoni } from "@/constants";
import { CustomButton } from "../..";
import Link from "next/link";

const Testimonial = () => {
  const settings: Settings = {
    dots: true,
    customPaging: function () {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20 ms-3",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 672,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [sliderRef, setSliderRef] = useState<any>(null);

  return (
    <div
      id="testimonial"
      className=" even-section-bg padding-x min-h-screen p-nav-scroll max-width pb-section"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col w-full text-center justify-center">
        <div>
          <h3 className="title">
            {/* Trusted by Thousands of Happy Customer */}
            Testimonials
          </h3>
          <p>These are placeholder testimonials, awaiting the authentic ones.</p>
          <p className="sub-title">
            Discover the stories of our delighted customers who have joined us
            with immense satisfaction, sharing their experiences of using our
            products.
          </p>
        </div>
        <Slider
          {...settings}
          arrows={false}
          ref={setSliderRef as LegacyRef<Slider>}
          className="flex items-stretch justify-items-stretch"
        >
          {listTestimoni.map((listTestimonis, index) => (
            <div className="px-3 flex items-stretch" key={index}>
              <div className="border-2 border-gray-500 hover:border-primary-light transition-all rounded-lg p-8 flex flex-col">
                <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                  <div className="flex order-2 xl:order-1">
                    <Image
                      className="rounded-lg"
                      src={listTestimonis.image}
                      height={50}
                      width={50}
                      alt="Icon People"
                    />
                    <div className="flex flex-col ml-5 text-left">
                      <p className="text-lg text-black-600 capitalize">
                        {listTestimonis.name}
                      </p>
                      <p className="text-sm text-black-500 capitalize">
                        {listTestimonis.city},{listTestimonis.country}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                    <p className="text-base">{listTestimonis.rating}</p>
                    <span className="flex ml-4">
                      <Image
                        src={"/display-icons/stars.svg"}
                        alt="stars"
                        className="h-5 w-5 "
                        height={5}
                        width={5}
                      />
                    </span>
                  </div>
                </div>
                <p className="mt-5 text-left p-5-line">
                  “{listTestimonis.testimoni}”.
                </p>
              </div>
            </div>
          ))}
        </Slider>

        <div className="flex w-full items-center justify-end pe-3">
          <div className="flex flex-none justify-between w-auto mt-14">
            <div
              className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-primary-light border hover:bg-primary-light hover:text-white transition-all text-primary-light cursor-pointer"
              onClick={sliderRef?.slickPrev}
            >
              <Image
                src={"/button-icons/eva_arrow-back-fill.svg"}
                alt="arrow-back"
                className="h-6 w-6 "
                height={6}
                width={6}
              />
            </div>
            <div
              className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-primary-light border hover:bg-primary-light hover:text-white transition-all text-primary-light cursor-pointer"
              onClick={sliderRef?.slickNext}
            >
              <Image
                src={"/button-icons/eva_arrow-next-fill.svg"}
                alt="arrow-back"
                className="h-6 w-6 "
                height={6}
                width={6}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonial;
