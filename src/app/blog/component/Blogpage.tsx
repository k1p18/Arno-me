import React from "react";

const Blogpage = () => {
  return (
    <>
      <section>
        <div className="w-full min-h-screen flex flex-col items-center justify-center py-10">
          <span className="text-md md:text-lg font-bold text-[#117278] flex items-center gap-1">
            Our Insights
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl text-center chelsea-market-regular font-bold text-[#117278] md:mb-16 mb-10">
            News Feeds
          </h2>

          <div className="px-4 md:px-[2rem] xl:px-[6rem] flex flex-col lg:flex-row gap-10">
            <div className="lg:w-[80%] xl:w-[60%]">
              <img
                className="w-full object-cover h-[12rem] md:h-[18rem] aspect-square"
                src="https://techakim.com/sam/tg/7268/li/imgs/bg-blog.png"
                alt="blog image"
              />

              <div className="flex flex-col px-6 py-8 border-l border-r border-b">
                <div className="flex gap-4 text-sm text-gray-700 font-semibold">
                  <span className="flex gap-1 items-center">By Sammytg7</span>
                  <span className="flex gap-1 items-center">TechNews</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-semibold text-teal-900 chelsea-market-regular">
                  A Beginner's Guide to Modern Web Design
                </h3>

                <p className="text-md text-gray-500">
                  Step into the world of Tailwind CSS with this
                  beginner-friendly guide. Learn the basics of Tailwind's
                  utility classNamees, responsive design features, and
                  customization options to kickstart your journey in modern web
                  design.
                </p>
              </div>
            </div>

            <div className="w-full flex flex-col items-stretch justify-center">
              <div className="flex flex-col sm:flex-row gap-6 pb-6 border-b-2 border-gray-100">
                <div className="px-6 py-2 bg-yellow-500 text-white flex flex-col items-center justify-center">
                  <img
                    src="https://www.animesenpai.net/wp-content/uploads/2025/04/d9a33-17055806749180-1920-1-1024x576.webp"
                    alt=""
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div className="flex md:gap-4 gap-2 text-sm text-gray-700 font-semibold">
                    <span className="flex gap-1 items-center">By Sammytg7</span>
                    <span className="flex gap-1 items-center">TechNews</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-semibold text-teal-900 capitalize chelsea-market-regular">
                    Effortless Styling: Unleashing the Power of Tailwind CSS
                  </h3>

                  <p className="text-md text-gray-500">
                    Discover how Tailwind CSS revolutionizes web development
                    with its utility-first approach.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pb-6 border-b-2 border-gray-100">
                <div className="px-6 py-2 bg-teal-500 text-white flex flex-col items-center justify-center">
                  <img
                    src="https://www.animesenpai.net/wp-content/uploads/2025/04/d9a33-17055806749180-1920-1-1024x576.webp"
                    alt=""
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div className="flex md:gap-4 gap-2 text-sm text-gray-700 font-semibold">
                    <span className="flex gap-1 items-center">By Sammytg7</span>
                    <span className="flex gap-1 items-center">TechNews</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-semibold text-teal-900 capitalize chelsea-market-regular">
                    Tailwind CSS Pro Tips: Advanced Techniques for Stunning Web
                    Interfaces
                  </h3>

                  <p className="text-md text-gray-500">
                    Elevate your web design skills with advanced tips and tricks
                    for Tailwind CSS. Uncover techniques for optimizing your
                    workflow
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pb-6 border-b-2 border-gray-100">
                <div className="px-6 py-2 bg-red-500 text-white flex flex-col items-center justify-center">
                  <img
                    src="https://www.animesenpai.net/wp-content/uploads/2025/04/d9a33-17055806749180-1920-1-1024x576.webp"
                    alt=""
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div className="flex md:gap-4 gap-2 text-sm text-gray-700 font-semibold">
                    <span className="flex gap-1 items-center">By Sammytg7</span>
                    <span className="flex gap-1 items-center">TechNews</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-semibold text-teal-900 capitalize chelsea-market-regular">
                    Responsive Design Made Easy: Harnessing Tailwind CSS for
                    Mobile-First Websites
                  </h3>

                  <p className="text-md text-gray-500">
                    Explore how Tailwind CSS simplifies responsive design for
                    mobile-first websites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogpage;
