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
    // icon: <FaCameraRetro className="text-4xl text-primary" />,
    link: "#",
    description:
      "We pride ourselves on delivering high-quality academic and business research services that meet the diverse needs of our global clientele. Our commitment to excellence ensures that we consistently exceed client expectations, fostering trust and loyalty.",
    aosDelay: "0",
  },
  {
    name: "Advanced Data Analysis Techniques",
    icon: Icon2,
    // icon: <GiNotebook className="text-4xl text-primary" />,
    link: "#",
    description:
      " By leveraging cutting-edge data analysis techniques, we enhance the reliability and depth of our research findings. This not only differentiates us from competitors but also positions us as thought leaders in the research consultancy space.",
    aosDelay: "300",
  },
  {
    name: "Academic Online Tutoring",
    icon: Icon3,
    // icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "We offer Proven and Reliable  Academic Tutoring and Assignment  Help Opportunities for Students at all levels through the Internet Globally, We can totally guarantee you an 100% success rate in any of your Academic Engagements without any Hurdles.",
    aosDelay: "500",
  },
  {
    name: "Fail-proof Academic Writing Services",
    icon: Icon4,
    // icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      " Our Geeks are one of top Percenters in Delivering Tailored and Successful Projects in Research Papers, Essays, Resumes, Business Proposals and Presentations. We put in Mind Details and the Desired Goals of our Respective Clients, ensuring the Whole Process goes incredibly well.",
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
          <div className=" animate-pulse grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
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
