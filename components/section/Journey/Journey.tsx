import { journeyData } from "@/constants";
import Image from "next/image";
import React from "react";

const Journey = () => {
  return (
    <section
      id="journey"
      className="padding-x min-h-screen p-nav-scroll flex items-center justify-center"
    >
      <div className="py-16 md:py-20" id="work">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          My work experience
        </h2>
        <h3 className="pt-6 mb-12 text-center font-header text-base font-medium text-black/40 sm:text-xl lg:text-2xl">
          Taking a moment to reflect on my journey and accomplishments thus far.
        </h3>

        <div className="relative mx-auto flex w-full flex-col lg:w-2/3">
          <span className="left-[40%] absolute inset-y-0 ml-10 hidden w-0.5 bg-gray-400 md:block"></span>
          {journeyData.map((role) => (
            <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
              <div className="md:w-2/5">
                <div className="flex justify-center md:justify-start">
                  <span className="shrink-0">
                    <Image
                      src={role.companyLogo}
                      className="h-auto w-32"
                      alt="company logo"
                      height={100}
                      width={100}
                    />
                  </span>
                  <div className="relative ml-3 hidden w-full md:block">
                    <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-gray-300"></span>
                  </div>
                </div>
              </div>
              <div className="md:w-3/5">
                <div className="relative flex md:pl-20">
                  <span className="absolute left-8 top-4 hidden h-4 w-4 rounded-full border-2 border-gray-600 bg-white md:block"></span>

                  <div className="mt-1 flex">
                    <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                    <div className="md:-mt-1 md:pl-8">
                      <span className="block font-body font-bold text-gray-600">
                        {role.Date}
                      </span>
                      <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                        {role.title}
                      </span>
                      <div className="pt-2">
                        <span className="block font-body text-black">
                          {role.description}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
