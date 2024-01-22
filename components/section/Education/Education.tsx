import { educationData } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Education = () => {
  return (
    <section
      id="education"
      className="padding-x min-h-screen p-nav-scroll py-10 md:py-16 flex items-center justify-center bg-gray-100"
    >
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
          Education
        </h1>

        <p className="font-normal text-gray-500 text-xs md:text-base mb-10">
          Below is a summary of the places I studied
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationData.map((institution) => (
            <div className="bg-gray-50 px-8 py-10 rounded-md hover:bg-white hover:shadow-xl">
              {/* <Image
                src={"/display-icons/dots-stack.svg"}
                alt="img"
                height={20}
                width={20}
                className="absoluto top-0 left-0"
              />
              <Image
                src={"/display-icons/dots-stack.svg"}
                alt="img"
                height={20}
                width={20}
                className="absoluto bottom-0 right-0"
              /> */}
              <h1 className="font-medium text-xl py-2 ">{institution.title}</h1>
              <h4 className="text-gray-600 text-base mb-4">
                {institution.date}
              </h4>

              <p className="p-5-line font-normal text-gray-500 text-md mb-4">
                {institution.description}
              </p>

              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">
                  <Link href={institution.url}>See the place here</Link>
                </h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
