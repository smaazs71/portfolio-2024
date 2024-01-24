"use client";

import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";

import Image from "next/image";
import { CustomButton } from "@/components";
import { headerLinks } from "@/constants";
import Link from "next/link";

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
          "fixed top-0 w-full z-30 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-1")
        }
      >
        <div className="backdrop-blur-sm w-full h-full absolute left-0 top-0"></div>
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
                className="object-contain rounded p-3 bg-white"
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
                  "px-4 py-2 mx-2 cursor-pointer border-white border rounded-full drop-shadow-md shadow font-semibold animation-hover inline-block relative" +
                  (activeLink === link.section
                    ? " text-primary-light animation-active "
                    : " text-black-100 hover:text-primary-light a")
                }
              >
                {link.title}
              </LinkScroll>
            ))}
          </ul>
          <div className="col-start-10 col-end-12 flex justify-end items-center">
            <Link
              href={
                "https://drive.google.com/file/d/1balr5D2pyR5Y2oV-U7Yy990noEEKtdvx/view?usp=drive_link"
              }
              target="blank"
              className="z-10"
            >
              <CustomButton
                title="Download CV"
                btnType="button"
                containerStyles="text-white font-bold rounded-full bg-primary-light min-w-[130px] px-7 py-3 my-3"
              />
            </Link>
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
