"use client";

import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";

import Image from "next/image";
import { CustomButton } from "@/components";
import { headerLinks } from "@/constants";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full z-30 bg-white transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-1")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-0 sm:py-1">
          <div className="col-start-1 col-end-2 flex items-center">
            <LinkScroll
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("hero");
              }}
              className={"px-4 py-2 mx-2 cursor-pointer inline-block relative"}
            >
              <Image
                src="/display-icons/Uchiha-Mugiwara-logos-black.png"
                alt="portfolio"
                width={180}
                height={28}
                className="object-contain"
              />
            </LinkScroll>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            {headerLinks.map((link) => (
              <LinkScroll
                activeClass="active"
                to={link.section}
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink(link.section);
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === link.section
                    ? " text-primary-blue animation-active "
                    : " text-black-100 hover:text-primary-blue a")
                }
              >
                {link.title}
              </LinkScroll>
            ))}
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <CustomButton
              title="Get CV"
              btnType="button"
              containerStyles="text-white rounded-full bg-primary-blue min-w-[130px]"
            />
          </div>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 shadow-t ">
        <div className="bg-white">
          <ul className="flex w-full px-2 sm:px-8 justify-between items-center text-black">
            {headerLinks.map((link) => (
              <LinkScroll
                activeClass="active"
                to={link.section}
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink(link.section);
                }}
                className={
                  "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (activeLink === link.section
                    ? "  border-primary-blue text-primary-blue"
                    : " border-transparent")
                }
              >
                <Image
                  src={link.icon}
                  alt={link.title}
                  height={100}
                  width={100}
                  className="w-6 h-6"
                />
                {link.title}
              </LinkScroll>
            ))}
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Navbar;