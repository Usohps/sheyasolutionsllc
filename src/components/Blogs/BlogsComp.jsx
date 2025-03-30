// import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/blog/blog1.png";
import Img2 from "../../assets/blog/blog2.png";
import Img3 from "../../assets/blog/blog3.png";

const BlogsData = [
  {
    id: 1,
    image: Img3,
    link:"https://medium.com/@sheyasolutionsllc/learning-from-home-a-better-option-b8cfe0537055",
    title: "LEARNING FROM HOME; A BETTER OPTION?",
    description:
      "Learning from home, also known as distance learning or homeschooling, has an aged and evolving history. Here are some key Events.",
    author: "Sheya Solutions LLC",
    date: "April 22, 2022",
  },
  {
    id: 2,
    image: Img2,
    link:"https://medium.com/@sheyasolutionsllc/scaling-through-academic-journey-successfully-49aaf2a43217",
    title: "SCALING THROUGH ACADEMIC JOURNEY SUCCESSFULLY",
    description:
      "Undoubtedly, every student’s dream is to ascend to a point of academic ease and excellence but a wish is never enough",
    author: "Sheya Solutions LLC",
    date: "April 22, 2022",
  },
  {
    id: 3,
    image: Img1,
    link:"https://medium.com/@sheyasolutionsllc/unlocking-the-key-to-career-growth-5560f8ce5c9b",
    title: "UNLOCKING THE KEY TO YOUR CAREER GROWTH",
    description:
      "After Investing a whole of resources and time into your Education, one of the Questions that lingers on your mind is",
    author: "Sheya Solutions LLC",
    date: "April 22, 2022",
  },
];

const BlogsComp = () => {
  return (
    <>
      <span id="blog"></span>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Our Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center">
            <button className="primary-btn font-extrabold">
              <a
                href="https://medium.com/@sheyasolutionsllc"
                target="_blank"
                rel="noreferrer"
              >
                View All Posts
              </a>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
