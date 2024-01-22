import React from "react";

const HireMe = () => {
  return (
    <section className="mt-6">
      <div className="max-w-[1140px]">
        <div className="bg-primary/70 rounded-sm relative overflow-hidden z-10 text-center py-[70px] ">
          <div className="max-w-[770px] mx-auto px-3">
            <h2 className="bg-none opacity-100 font-bold text-2xl text-black md:text-4xl mb-3">
              Want to work together and create amazing products with me?
            </h2>
            <form className="mx-auto relative max-w-[480px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-3xl min-w-100 text-center px-2 py-1 opacity-20 sm:text-left"
              />
              <button className="py-[10px] absolute font-bold text-base rounded-xl bg-white ">
                Get a Quote
              </button>
            </form>
          </div>
          <div className="d k g q bc nn">
            <svg
              width="818"
              height="286"
              viewBox="0 0 818 286"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fa"
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
