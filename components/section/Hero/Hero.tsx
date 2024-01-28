"use client";

import { ScrollAnimationWrapper } from "@/components";
import React, { useMemo } from "react";
import { Link as LinkScroll } from "react-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  function getScrollAnimation() {
    return {
      offscreen: {
        y: 150,
        opacity: 0,
      },
      onscreen: ({ duration = 2 } = {}) => ({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration,
        },
      }),
    };
  }
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
      <section
        id="hero"
        className="odd-section-bg padding-x min-h-screen flex items-center justify-center min-w-screen"
      >
        <ScrollAnimationWrapper>
          <motion.div variants={scrollAnimation}>
            <div className="">
              <div className="text-center">
                <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
                  M. Maaz Shaikh
                </h6>
                <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
                  Full Stack Developer
                </h1>
                <motion.div variants={scrollAnimation}>
                  <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
                    Welcome to my digital space! I'm M. Maaz Shaikh, a
                    passionate Full Stack Developer (MERN) dedicated to creating
                    user-focused applications that simplify and enhance life.
                    Explore my journey, education, and the exciting projects
                    that showcase my skills and versatility.
                    {/* I have a passion for software. I enjoy creating tools that make
              life easier for people. */}
                  </p>
                </motion.div>
                <motion.div variants={scrollAnimation}>
                  <LinkScroll
                    to="hireme"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 hover:border-gray-700 border transition ease-linear duration-500"
                  >
                    Hire me
                  </LinkScroll>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </section>
    </>
  );
};

export default Hero;
