"use client";

import { useState } from "react";
import { validateEmail } from "@/utils";

const HireMe = () => {
  const [email, setEmail] = useState("");

  const sendEmail = async () => {
    if (!validateEmail("emailData.emailId")) {
      return;
    }
    const emailData = {
      name: "client",
      emailId: email,
      message: "Client request for project inquiry",
      checked: false,
    };

    await fetch("/api/contact", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailData),
    })
      .then((response) => {
        setEmail("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="">
      {/* <div className="mx-5 bg-primary-light rounded-2xl text-center p-5">
        <h2 className="font-bold text-2xl text-black md:text-4xl mb-3 h-full">
          Want to work together and create amazing products with me?
        </h2>
      </div> */}
      <div className="max-w-[90%] m-auto ">
        <div className="bg-primary-light rounded-lg relative overflow-hidden z-10 text-center py-[70px] ">
          <div className="max-w-[770px] mx-auto px-3 h-full z-10">
            <h2 className="font-bold text-2xl text-white md:text-4xl mb-12 h-full">
              Want to work together and create amazing products with me?
            </h2>
            <form className="mx-auto relative max-w-[480px] z-10">
              <input
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mb-0 rounded-[999px] min-w-full text-white text-center px-8 py-4 outline-2 outline-offset-2 outline-transparent bg-white/15 sm:text-center border-white/15 border"
              />
              <button
                onClick={() => sendEmail()}
                className="top-2 right-2 m-auto absolute text-primary-light py-[10px] w-auto font-semibold px-5 text-base rounded-[999px] bg-white cursor-pointer"
              >
                Get a Quote
              </button>
            </form>
          </div>
          <div className="absolute right-0 bottom-0 left-0 w-full m-auto z-0">
            <svg
              width="818"
              height="286"
              viewBox="0 0 818 286"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              <circle
                cx="409"
                cy="409"
                r="408.5"
                stroke="url(#paint0_linear_0:1)"
              ></circle>
              <circle
                cx="409"
                cy="409"
                r="349.5"
                stroke="url(#paint1_linear_0:1)"
              ></circle>
              <defs>
                <linearGradient
                  id="paint0_linear_0:1"
                  x1="-34.5"
                  y1="291.5"
                  x2="851"
                  y2="291.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0.35"></stop>
                  <stop
                    offset="0.218415"
                    stop-color="white"
                    stop-opacity="0"
                  ></stop>
                  <stop
                    offset="0.728079"
                    stop-color="white"
                    stop-opacity="0"
                  ></stop>
                  <stop
                    offset="1"
                    stop-color="white"
                    stop-opacity="0.35"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0:1"
                  x1="29.4768"
                  y1="308.45"
                  x2="787.24"
                  y2="308.45"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0.35"></stop>
                  <stop
                    offset="0.218415"
                    stop-color="white"
                    stop-opacity="0"
                  ></stop>
                  <stop
                    offset="0.777261"
                    stop-color="white"
                    stop-opacity="0"
                  ></stop>
                  <stop
                    offset="1"
                    stop-color="white"
                    stop-opacity="0.35"
                  ></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
