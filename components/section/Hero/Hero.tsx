import React from "react";
import Image from "next/image";
import { HireMe } from "@/components";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="padding-x min-h-screen flex items-center justify-center min-w-screen"
      >
        <div className="">
          <div className="text-center">
            {/* <div className="flex justify-center mb-16">
            <Image
              src="/next.svg"
              alt="Image"
              height={100}
              width={100}
            />
          </div> */}

            <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
              M. Maaz Shaikh
            </h6>

            <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
              Full Stack Developer <br /> (MERN)
            </h1>

            <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
              I have a passion for software. I enjoy creating tools that make
              life easier for people.
            </p>

            <a
              href="#"
              className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
            >
              Hire me
            </a>
          </div>
        </div>
      </section>
      <HireMe />
    </>
  );
};

export default Hero;
