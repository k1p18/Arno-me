import React from "react";
import PropTypes from "prop-types";

import Link from "next/link";

const blogs = [
  {
    title: "Not Your Regular Home Decoration?",
    description:
      "Urna molestie at eleme ntum eu facilisis sed odio Male suada fames.",
    author: "Maisha Adiba",
    date: "21 Jun, 2022",
    image: "https://cdn.easyfrontend.com/pictures/blog/blog_14_3.jpg",
  },
  {
    title: "How I’m Styling Everyday Black Outfits",
    description:
      "It’s no secret that the digital industry is booming. From exciting startups to global brands.",
    author: "Alex Hales",
    date: "21 Jun, 2022",
    image: "https://cdn.easyfrontend.com/pictures/blog/blog_14_1.jpg",
  },
  {
    title: "Fashion Essentials All Men Should Know",
    description:
      "More off this less hello salamander lied porpoise much over tightly circa horse taped.",
    author: "John Stokes",
    date: "21 Jun, 2022",
    image: "https://cdn.easyfrontend.com/pictures/blog/blog_13_3.jpg",
  },
];

const BlogItem = ({ blog }) => {
  const { title, description, author, date, image } = blog;

  return (
    <Link href="#!" passHref>
      <article className="shadow-lg bg-white dark:bg-[#1E2735] dark:shadow-none rounded-lg overflow-hidden mt-6 pb-2">
        <img src={image} alt={title} className="h-auto w-full object-cover" />
        <div className="p-3 pb-8 lg:p-6">
          <h4 className="font-medium text-2xl mb-1">{title}</h4>
          <p className="opacity-80 mb-2">
            {/* <span className="mr-2">
              By{" "}
              <Link href="#!" className="text-blue-600">
                {author}
              </Link>
            </span> */}
          </p>
          <p className="opacity-60 mt-3 mb-6">{description}</p>
          <Link
            href="#!"
            className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white py-2 px-5 rounded transition"
          >
            Read More
          </Link>
        </div>
      </article>
    </Link>
  );
};

BlogItem.propTypes = {
  blog: PropTypes.object.isRequired,
};

const FeaturedBlogItem = () => {
  return (
    <Link href="#!" passHref>
      <article>
        <div className="grid grid-cols-12 items-center gap-6">
          <div className="col-span-12 lg:col-span-7">
            <img
              src="https://cdn.easyfrontend.com/pictures/blog/blog_4.jpg"
              alt=""
              className="max-w-full h-auto rounded"
            />
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="mt-6 lg:mt-0 lg:pl-6">
              <h4 className="font-medium text-2xl md:text-[40px] md:leading-[50px] mb-2">
                Interview - What it's like to work remotely in big-sized product
                development?
              </h4>
              <p className="md:text-lg opacity-60 mt-3 mb-6">
                This is a factor in the economy of a nation, and the
                administration takes the major choices. Banking crises have
                developed many times throughout history when one or more risks
                have emerged for a banking sector as a whole.
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

const Blogpost = () => {
  return (
    <>
      <section className="ezy__blog4 light py-14 md:py-24 text-stone-800 bg-white dark:bg-[#0b1727] dark:text-white overflow-hidden">
        <div className="container mx-auto px-5 md:px-8 xl:px-28">
          <div className="text-center mb-12">
            <h2 className="text-[32px] lg:text-[45px] leading-none font-bold mb-4">
              Heal the world with banking blog.
            </h2>
            <p className="text-lg font-medium opacity-80 lg:px-12 mb-9">
              Banking crises have developed many times throughout history when
              one or more risks have emerged for a banking sector as a whole.
            </p>
           
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <FeaturedBlogItem />
            </div>
            {blogs.map((blog, i) => (
              <div className="col-span-12 md:col-span-6 lg:col-span-4" key={i}>
                <BlogItem blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogpost;

{
  /* <section>
  <div className="w-full min-h-screen flex flex-col items-center justify-center py-10">
    <span className="text-md md:text-lg font-bold text-[#117278] flex items-center gap-1">
      Our Insights
    </span>
    <h2 className="text-4xl sm:text-5xl md:text-7xl text-center chelsea-market-regular font-bold text-[#117278] md:mb-16 mb-10">
      News Feeds
    </h2>

    <div className="px-4 md:px-[2rem] xl:px-[6rem] flex flex-col lg:flex-row gap-10">
      <div className="lg:w-[60%] xl:w-[50%]">
        <img
          className="w-full object-cover h-[12rem] sm:h-[16rem] md:h-[24rem]"
          src="https://www.animesenpai.net/wp-content/uploads/2025/04/u-88.png.webp"
          alt="blog image"
        />

        <div className="flex flex-col px-6 py-8 border-l border-r border-b">
          <div className="flex gap-4 text-sm text-gray-700 font-semibold">
            <span className="flex gap-1 items-center">By Sammytg7</span>
            <span className="flex gap-1 items-center">TechNews</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold text-teal-900 chelsea-market-regular mb-2">
            A Beginner's Guide to Modern Web Design
          </h3>

          <p className="text-md text-gray-500 mt-2">
            Step into the world of Tailwind CSS with this
            beginner-friendly guide. Learn the basics of Tailwind's
            utility classes, responsive design features, and
            customization options to kickstart your journey in modern web
            design.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col lg:w-[40%] xl:w-[50%] gap-6">
        <div className="flex flex-col sm:flex-row gap-6 pb-6 border-b-2 border-gray-100">
          <div className="px-6 py-2 text-white flex flex-col items-center justify-center">
            <img
              className="w-full object-cover h-[14rem] sm:h-[16rem] md:h-[18rem] aspect-square"
              src="https://www.animesenpai.net/wp-content/uploads/2025/04/d9a33-17055806749180-1920-1-1024x576.webp"
              alt="Post image"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex md:gap-4 gap-2 text-sm text-gray-700 font-semibold">
              <span className="flex gap-1 items-center">By Sammytg7</span>
              <span className="flex gap-1 items-center">TechNews</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-teal-900 capitalize chelsea-market-regular mb-2">
              Effortless Styling: Unleashing the Power of Tailwind CSS
            </h3>

            <p className="text-md text-gray-500 mt-2">
              Discover how Tailwind CSS revolutionizes web development
              with its utility-first approach.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 pb-6 border-b-2 border-gray-100">
          <div className="px-6 py-2 text-white flex flex-col items-center justify-center">
            <img
              className="w-full object-cover h-[14rem] sm:h-[16rem] md:h-[18rem] aspect-square"
              src="https://www.animesenpai.net/wp-content/uploads/2025/04/d9a33-17055806749180-1920-1-1024x576.webp"
              alt="Post image"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex md:gap-4 gap-2 text-sm text-gray-700 font-semibold">
              <span className="flex gap-1 items-center">By Sammytg7</span>
              <span className="flex gap-1 items-center">TechNews</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-teal-900 capitalize chelsea-market-regular mb-2">
              Tailwind CSS Pro Tips: Advanced Techniques for Stunning Web
              Interfaces
            </h3>

            <p className="text-md text-gray-500 mt-2">
              Elevate your web design skills with advanced tips and tricks
              for Tailwind CSS. Uncover techniques for optimizing your
              workflow.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 pb-6 border-b-2 border-gray-100">
          <div className="px-6 py-2 text-white flex flex-col items-center justify-center">
            <img
              className="w-full object-cover h-[14rem] sm:h-[16rem] aspect-square"
              src="https://www.animesenpai.net/wp-content/uploads/2025/04/d9a33-17055806749180-1920-1-1024x576.webp"
              alt="Post image"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex md:gap-4 gap-2 text-sm text-gray-700 font-semibold">
              <span className="flex gap-1 items-center">By Sammytg7</span>
              <span className="flex gap-1 items-center">TechNews</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-teal-900 capitalize chelsea-market-regular mb-2">
              Responsive Design Made Easy: Harnessing Tailwind CSS for
              Mobile-First Websites
            </h3>

            <p className="text-md text-gray-500 mt-2">
              Explore how Tailwind CSS simplifies responsive design for
              mobile-first websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */
}

{
  /* <section>
  <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
    <h2 className="text-center text-3xl font-bold md:text-5xl md:text-left">
      The latest and greatest news
    </h2>
    <p className="mb-8 mt-4 text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16 md:text-left">
      Lorem ipsum dolor sit amet elit ut aliquam
    </p>

    <div className="mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      <a href="#" className="flex flex-col gap-4 rounded-md md:pr-8">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
          alt=""
          className="inline-block h-72 w-full object-cover"
        />
        <div className="flex flex-col items-start py-4">
          <p className="mb-4 text-xl font-bold md:text-2xl">
            The latest news with Flowspark
          </p>
          <div className="flex flex-col text-sm text-gray-500 md:flex-row">
            <p>Laila Bahar</p>
            <p className="mx-2 hidden md:block">-</p>
            <p>6 mins read</p>
          </div>
        </div>
      </a>

      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-between md:gap-4">
        {[
          "Here is the title for this blog",
          "Here is the title for this blog",
          "Here is the title for this blog",
        ].map((title, index) => (
          <a
            key={index}
            href="#"
            className="flex flex-col pb-5 md:mb-3 md:flex-row md:border-b md:border-gray-300"
          >
            <img
              src="https://www.animesenpai.net/wp-content/uploads/2025/04/u-68-600x600.webp"
              alt=""
              className="inline-block h-60 w-full object-cover md:h-32 md:w-32"
            />
            <div className="flex flex-col items-start pt-4 md:px-8">
              <p className="mb-2 text-sm font-bold sm:text-base">
                {title}
              </p>
              <div className="flex flex-col items-start">
                <div className="flex flex-col text-sm text-gray-500 sm:text-base md:flex-row md:items-center">
                  <p>Laila Bahar</p>
                  <p className="mx-2 hidden md:block">-</p>
                  <p>6 mins read</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
</section> */
}
