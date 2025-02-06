import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "High-Quality Research Services",
    icon: <FaCameraRetro className="text-4xl text-primary" />,
    link: "#",
    description:
      "We pride ourselves on delivering high-quality academic and business research services that meet the diverse needs of our global clientele. Our commitment to excellence ensures that we consistently exceed client expectations, fostering trust and loyalty.",
    aosDelay: "0",
  },
  {
    name: "Advanced Data Analysis Techniques",
    icon: <GiNotebook className="text-4xl text-primary" />,
    link: "#",
    description:
      " By leveraging cutting-edge data analysis techniques, we enhance the reliability and depth of our research findings. This not only differentiates us from competitors but also positions us as thought leaders in the research consultancy space.",
    aosDelay: "300",
  },
  {
    name: "Academic Online Tutoring",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "We offer Proven and Reliable  Academic Tutoring and Assignment  Help Opportunities for Students at all levels through the Internet Globally, We can totally guarantee you an 100% success rate in any of your Academic Engagements without any Hurdles.",
    aosDelay: "500",
  },
  {
    name: "Fail-proof Academic Writing Services",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      " Our Geeks are one of top Percenters in Delivering Tailored and Successful Projects in Research Papers, Essays, Resumes, Business Proposals and Presentations. We put in Mind Details and the Desired Goals of our Respective Clients, ensuring the Whole Process goes incredibly well.",
    aosDelay: "700",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              We are self-service data analytics software that lets you create
              visually.
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="primary-btn">Get In Touch</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
