import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 border-t border-gray-100 pb-8 sm:pb-0">
      <div className="flex flex-col-reverse lg:flex-row flex-wrap justify-between gap-12 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6 lg:border-t-0 lg:pt-0 border-t-2 pt-3  border-t-gray-50">
          <Image
            src="/logo/Uchiha-Mugiwara-logos-black.png"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            M. Maaz Shaikh @2024 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="title-2">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  rel="noopener noreferrer"
                  target={"_blank"}
                  className="sub-title-2 flex items-center justify-start gap-2 hover:text-black hover:font-medium"
                >
                  {item.image_path && item.image_path !== "" ? (
                    <>
                      <Image
                        src={item.image_path}
                        alt="image"
                        width={100}
                        height={100}
                        className={`object-contain w-9 h-9 `}
                      />
                      <span>{item.title}</span>
                    </>
                  ) : (
                    item.title
                  )}

                  {/* {item.image_path ? <Image src={item.image_path} alt="image" width={18} height={18} className="object-contain" /> : ""} */}
                  {/* {item.title} */}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* <div className="flex justify-between items-center flex-wrap mt-10 border-t boreder-gray-100 sm:px-16 px-6 py-10">
        <p>@2024 M. Maaz Shaikh. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of Use
          </Link>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
