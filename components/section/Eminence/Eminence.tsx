import { clientData } from "@/constants";
import Image from "next/image";
import React from "react";

const Eminence = () => {
  return (
    <section
      className="odd-section-bg padding-x min-h-screen p-nav-scroll pb-section"
      id="eminence"
    >
      <div className="">
        <div className="items-center max-w-screen-xl px-4 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:px-6">
          <div className="col-span-2">
            <p className="title-adj">Innovative Full-Stack Developer</p>
            <h2 className="title-2 tracking-tight">
              Building Scalable, High-Performance Systems with Node.js,
              AI-Driven Automation, and Cloud Microservices
            </h2>
            <p className="sub-title !text-start">
              Versatile full-stack developer with expertise in Node.js,
              React.js, AWS, MongoDB, SQL, and NoSQL. Adept at developing
              AI-powered automation for job applications, implementing
              cloud-based workflows, and optimizing robust solutions for
              enterprise clients.
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
                        target="blank"
                      >
                        <Image
                          src={client.logo}
                          className="opacity-70 hover:opacity-100 h-9 w-full hover:text-gray-900 dark:hover:text-white"
                          alt="client logo"
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

              <h3 className="title-2">React JS</h3>
              <p className="sub-title-2">
                3+ years of experience building high-performance, user-centric
                interfaces with React.js and Next.js. I have delivered
                innovative digital showrooms, dynamic dashboards, and scalable
                enterprise solutions for clients such as AP Furniture, Utells,
                and Infosys.
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

              <h3 className="title-2">Node JS</h3>
              <p className="sub-title-2">
                Extensive backend expertise with Node.js and Express.js,
                delivering scalable microservices and real-time applications for
                both enterprise and freelance projects. Experience includes
                robust API integrations, email OTP validation, and real-time
                location sharing systems.
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
              <h3 className="title-2">SQL/NoSQL</h3>
              <p className="sub-title-2">
                4+ years of experience working with PostgreSQL, MongoDB, and
                MySQL. Adept at designing and managing robust data architectures
                that power scalable, high-performance applications for both
                enterprise and freelance projects.
              </p>
            </div>
            <div>
              <Image
                src={"/display-icons/aws-logo.svg"}
                alt="AWS icon"
                height={100}
                width={100}
                className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
              />
              <h3 className="title-2">AWS</h3>
              <p className="sub-title-2">
                Skilled in AWS services (EC2, S3, Lambda, Amplify), enabling
                efficient cloud deployments and scalable architectures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eminence;
