import { clientData } from "@/constants";
import Image from "next/image";
import React from "react";

const Eminence = () => {
  return (
    <section
      className="odd-section-bg padding-x min-h-screen p-nav-scroll max-width pb-section"
      id="eminence"
    >
      <div className="">
        <div className="items-center max-w-screen-xl px-4 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:px-6">
          <div className="col-span-2">
            <p className="title-adj">Adaptable Full-Stack Developer</p>
            <h2 className="title-2 tracking-tight">
              Crafting High-Performance, User-Focused Applications with Node.js,
              and React.js
            </h2>
            <p className="sub-title !text-start">
              Versatile Full-Stack Developer specializing in Node.js, SQL, NoSQL
              and React.js. Known for crafting robust, scalable, and
              user-centric applications with adaptability and collaborative
              spirit.
            </p>
            <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
              <div className="">
                <div className="max-w-screen-xl px-4 mx-auto">
                  <h1 className="title-2">Worked for:</h1>
                  <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-10 sm:grid-cols-3 lg:grid-cols-4 dark:text-gray-400">
                    {clientData.map((client) => (
                      <a
                        href={client.url}
                        className="flex items-center lg:justify-center"
                      >
                        <Image
                          src={client.logo}
                          className="opacity-70 hover:opacity-100 h-9 w-full hover:text-gray-900 dark:hover:text-white"
                          alt="logo"
                          height={100}
                          width={100}
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="pt-6 my-6 title w-full lg:hidden border-t border-gray-200">
            Skills
          </h2>
          <div className="pt-0 col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            <div>
              <Image
                src={"/display-icons/react-logo.svg"}
                alt="react logo"
                height={100}
                width={100}
                className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
              />

              <h3 className="title-2">
                React JS
              </h3>
              <p className="sub-title-2">
                React JS: 2+ years. Infosys (Amex). Freelance on MERN for AP
                Furniture, Next.js portfolio. Exploring more Next.js projects.
              </p>
            </div>
            <div>
              <Image
                src={"/display-icons/nodejs-logo.svg"}
                alt="NodeJS logo"
                height={100}
                width={100}
                className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
              />

              <h3 className="title-2">
                Node JS
              </h3>
              <p className="sub-title-2">
                Node JS: Infosys Full Stack Developer (JAVA, React) - 1.5 years,
                freelanced approx. 8 months with MERN. Completed microservices,
                email OTP validation, and real-time location sharing projects.
              </p>
            </div>
            <div>
              <Image
                src={"/display-icons/database-icon.svg"}
                alt="Database icon"
                height={100}
                width={100}
                className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
              />
              <h3 className="title-2">
                SQL/NoSQL
              </h3>
              <p className="sub-title-2">
                Database: Handled PostgreSQL at Infosys, MongoDB in freelance
                projects. Showcasing versatile database management skills.
              </p>
            </div>
            <div>
              <Image
                src={"/display-icons/seo-icon.svg"}
                alt="SEO logo"
                height={100}
                width={100}
                className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
              />

              <h3 className="title-2">SEO</h3>
              <p className="sub-title-2">
                Prioritizing and incorporating SEO principles for an impactful,
                searchable, and accessible online presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eminence;
