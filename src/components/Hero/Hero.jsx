import yellowCar from "../../assets/website/hero_img.png";
import { redirectToWhatsApp } from "../../utils/whatsapp";
const Hero = () => {
  return (
    <>
      <span id="home"></span>
      <div className="dark:bg-gray-950 dark:text-white mt-10 duration-300 ">
        <div className="container min-h-[620px] flex sm:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
            {/* Image section */}
            <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
              <img
                src={yellowCar}
                alt=""
                className="w-full sm:max-w-[280px] lg:rounded-full md:rounded-xl md:max-w-[430px]"
              />
              <div
                data-aos="slide-right"
                className="absolute -bottom-5 -right-10 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md"
              >
                <p className="text-gray-500 text-sm ">⭐Projects/Businesses</p>
                <h1 className="font-bold">
                  Over 600+ <span className="font-normal">Done</span>
                </h1>
              </div>
            </div>

            {/* Text section */}
            <div className="space-y-5 order-2 sm:order-1 xl:pr-40 ">
              <h1
                data-aos="fade-up"
                className="text-4xl sm:text-5xl font-semibold"
                style={{ lineHeight: 1.2 }}
              >
                Welcome Our New Clients to
                <span className="text-primary"> Sheya Solutions LLC</span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
                At Sheya Solutions LLS, we are on the Journey of launching a
                Transformative Business that aims to redefine the Landscape of
                academic and business research. Our primary focus lies in
                providing high-quality research consultancy services tailored to
                meet the diverse needs of our clients, which include academic
                institutions, researchers, and businesses globally.
              </p>
              <button
                onClick={redirectToWhatsApp}
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-offset="0"
                className="primary-btn font-bold"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
