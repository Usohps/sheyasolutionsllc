import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "David Calathan - Student, New York",
    text: "I was struggling with my math coursework,but Sheya Solutions online tutoring services helped me grasp the concepts quickly. My tutor was patient, knowledgeable,and provided personalized attention. I highly recommend their services.",
  },
  {
    id: 2,
    name: "David Osita - Student, Nigeria",
    text: "Sheya Solutions' online tutoring helped me improve my grades significantly. My tutor identified areas where I needed improvement and provided targeted support. I'm now more confident in my academic abilities, thanks to their expert guidance.",
  },
  {
    id: 3,
    name: "Mary Smith - Researcher, Canada",
    text: "I was impressed with the research paper delivered by Sheya Solutions. The writer demonstrated in-depth knowledge of the topic, and the paper was well-structured and free of errors. I highly recommend their academic writing services",
  },
  {
    id: 4,
    name: "Pius Love - Student, New Jersey",
    text: "Sheya Solutions' academic writing services are top-notch. They delivered my essay on time, and their support team was responsive and helpful throughout the process. I appreciate their commitment to quality and customer satisfaction",
  },
];

const Testimonial = () => {
  var settings = {
    arrows: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <span id="testimonial"></span>
      <div className="py-10">
        <div className="container">
          {/* testimonial section */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Our Clients Feedback and Remarks
            </h1>
          </div>
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text }) => {
                return (
                  <div key={id} className="my-6">
                    {/* card */}
                    <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl relative">
                      <div className="space-y-4">
                        <p className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-40">
                          “{text}”
                        </p>
                        <h1 className="text-xl font-bold">{name}</h1>
                      </div>
                      <p className="text-black/10 text-[12rem] font-serif absolute bottom-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
