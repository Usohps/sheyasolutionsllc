import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// import { redirectToWhatsApp } from "../../utils/whatsapp";
const FooterLinks = [
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Features",
    link: "/#features",
  },
  {
    title: "Works",
    link: "/#works",
  },
  {
    title: "Career",
    link: "/#career",
  },
];
const HelpLinks = [
  {
    title: "Customer Support",
    link: "/#support",
  },
  {
    title: "Delivery Details",
    link: "/#delivery-details",
  },
  {
    title: "Terms & Conditions",
    link: "/#terms",
  },
  {
    title: "Privacy Policy",
    link: "/#policy",
  },
];
const ResourcesLinks = [
  {
    title: "Free Ebooks",
    link: "/#ebooks",
  },
  {
    title: "How To Blog",
    link: "/#blogs",
  },
  {
    title: "Subscribe TCJ",
    link: "#",
  },
];
const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <section className="container py-10">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 text-primary flex items-center gap-3">
              Sheya Solutions LLC
            </h1>
            <p className="text-sm">
              We pride ourselves in Making Quality Education and Research
              Accesible to the World at Fingertips..
            </p>
            {/* <div
              data-aos="fade-up"
              data-aos-delay="900"
              data-aos-offset="0"
              className="text-center mt-4 sm:mt-8"
            >
              <button
                onClick={redirectToWhatsApp}
                className="primary-btn font-bold"
              >
                For more Enquires
              </button>
            </div> */}
            <br />
            {/* Social Handle */}
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.instagram.com/sheyasolutionsllc?igsh=ODI2NmE4dno1cjNx">
                <FaInstagram className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61568394731616&mibextid=ZbWKwL">
                <FaFacebook className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="https://www.linkedin.com/company/sheya-solutions-llc/">
                <FaLinkedin className="text-2xl hover:text-primary duration-300" />
              </a>
              <a href="https://x.com/sheyasolutions?t=n7_Z5CJx4KKxQuhbZBxZnw&s=09">
                <FaXTwitter className="text-2xl hover:text-primary duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-primary text-xl font-bold sm:text-left text-justify mb-3">
                  Company
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-primary text-xl font-bold sm:text-left text-justify mb-3">
                  Help
                </h1>
                <ul className="flex flex-col gap-3">
                  {HelpLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-primary text-xl font-bold sm:text-left text-justify mb-3">
                  Resources
                </h1>
                <ul className="flex flex-col gap-3">
                  {ResourcesLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-gray-400 "
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
