// import { FaCameraRetro } from "react-icons/fa";
// import { GiNotebook } from "react-icons/gi";
// import { SlNote } from "react-icons/sl";
import { redirectToWhatsApp } from "../../utils/whatsapp";
import Icon1 from "../../assets/brands/ssllcicon1.png";
import Icon2 from "../../assets/brands/ssllcison2.png";
import Icon3 from "../../assets/brands/ssllcicon3.png";
import Icon4 from "../../assets/brands/ssllcicon4.png";
const skillsData = [
  {
    name: "High-Quality Research Services",
    icon: Icon1,
    link: "#",
    description: [
      "Discussion and Dissertation  #50,000 (Fifty thousand Naira only)",
      "",
    ],
    aosDelay: "0",
  },
  {
    name: "Advanced Data Analysis Techniques",
    icon: Icon2,
    link: "#",
    description: ["Literature Review #30,000 (Thirty Thousand Naira only)"],
    aosDelay: "300",
  },
  {
    name: "Academic Online Tutoring",
    icon: Icon3,
    link: "#",
    description: [
      "Online classes for twelve (12)  weeks #500,000 (Five Hundred Thousand Naira only)",
      "Online classes for seven (7)  weeks #300,000 (Three Hundred Thousand Naira only)",
    ],
    aosDelay: "500",
  },
  {
    name: "Fail-proof Academic Writing Services",
    icon: Icon4,
    link: "#",
    description: [
      "Essay Writting #40,000 (Fourty Thousand Naira only)",
      "PowerPoint Presentation #70,000 (Seventy Thousand Naira only)",
    ],
    aosDelay: "700",
  },
];
const Pricing = () => {
  return (
    <>
      <span id="pricing"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Packages and Pricing
            </h1>
            {/* <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              We are A Transformative Business that aims to redefine the
              Landscape of academic and business research.
            </p> */}
          </div>

          {/* services cards */}
          <div className="animate-none grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className=" border-2 shadow-md rounded-lg dark:border-primary border-gray-400 w-full space-y-3 sm:space-y-4 p-4"
              >
                <div className="">
                  <img
                    src={skill.icon}
                    className=" w-16 h-16 lg:w-32 rounded-full lg:h-32"
                  />
                </div>
                <h1 className="text-lg text-primary font-semibold">
                  {skill.name}
                </h1>
                <div className="text-gray-600 dark:text-gray-400">
                  {skill.description.map((desc, index) => (
                    <li className=" p-2 font-extrabold text-md" key={index}>
                      {desc}
                    </li>
                  ))}
                </div>
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
            <button
              onClick={redirectToWhatsApp}
              className="primary-btn font-bold"
            >
              Make more Enquries Here
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
