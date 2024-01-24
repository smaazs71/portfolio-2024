import { clientData } from "@/constants";
import Image from "next/image";
import React from "react";

const Eminence = () => {
  return (
    <section
      className="padding-x min-h-screen p-nav-scroll max-width"
      id="eminence"
    >
      <div className="bg-white dark:bg-gray-900">
        <div className="items-center max-w-screen-xl px-4 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:px-6">
          <div className="col-span-2">
            <p className="text-lg font-medium text-purple-600 dark:text-purple-500">
              Adaptable Full-Stack Developer
            </p>
            <h2 className="mt-3 mb-4 text-2xl font-extrabold tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Crafting High-Performance, User-Focused Applications with Node.js,
              and React.js
            </h2>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              {/* Versatile full-stack developer specializing in Node.js, SQL, NoSQL, and
              React.js. Known for crafting robust, scalable, and user-centric
              applications with adaptability and collaborative spirit in
              fast-paced tech environments. Thrives in dynamic settings,
              passionate about innovative, high-performance solutions. */}
              Versatile Full-Stack Developer specializing in Node.js, SQL, NoSQL and
              React.js. Known for crafting robust, scalable, and user-centric
              applications with adaptability and collaborative spirit.
            </p>
            <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
              <div className="bg-white dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 mx-auto">
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
          <div className="pt-12 lg:pt-0 col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            <div>
              <Image
                src={"/display-icons/react-logo.svg"}
                alt="react logo"
                height={100}
                width={100}
                className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
              />

              <h3 className="mb-2 text-2xl font-bold dark:text-white">
                React JS
              </h3>
              <p className="text-base font-light text-gray-500 dark:text-gray-400">
                {/* 2+ years React JS, Infosys (American Express). Freelance MERN
                for AP Furniture, Next.js portfolio. Exploring more Next.js
                projects. */}
                React JS: 2+ years (Infosys, Freelance MERN, Next.js)
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

              <h3 className="mb-2 text-2xl font-bold dark:text-white">
                Node JS
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                {/* Infosys Full Stack Developer (JAVA, React) 1.5 yrs, freelanced 8
                months with MERN. Crafted AP Furniture Management app, completed
                microservices, email OTP validation, and real-time location
                sharing projects. */}
                Node JS: Infosys Full Stack Developer (JAVA, React) - 1.5 years, freelanced 8 months with MERN.
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
              <h3 className="mb-2 text-2xl font-bold dark:text-white">
                SQL/NoSQL
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                {/* Handled PostgreSQL at Infosys, MongoDB in freelance projects,
                showcasing versatile database management skills. */}
                Database: Handled PostgreSQL at Infosys, MongoDB in freelance projects.
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

              <h3 className="mb-2 text-2xl font-bold dark:text-white">SEO</h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                {/* Strategically prioritizing and incorporating SEO principles for
                an impactful, searchable, and accessible online presence. */}
                Prioritizing and incorporating SEO principles for an impactful, searchable, and accessible online presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eminence;
