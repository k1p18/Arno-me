// BOT CAPABILITY TO WORK WITH INDUSTRY

import React from "react";
import PropTypes from "prop-types";

const botcap = [
  {
    img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio16_1.png",
    title: "Sand Mining",
    text: "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you! Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
    color: "blue",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio16_2.png",
    title: "Steel",
    text: "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you! Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
    color: "green",
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio16_3.png",
    title: "Building",
    text: "It’s easier to reach your savings goals when you have the right savings account. Take a look and find the right one for you! Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.",
    color: "yellow",
  },
];

const IndustryItem = ({ item, index }) => {
  const { img, title, text, color } = item;
  return (
    <div className="flex flex-col gap-6 max-w-7xl mt-12 mx-auto">
      <div
        className={`grid grid-cols-12 gap-6 bg-${color}-100 bg-opacity-30 rounded-xl p-6 md:p-12`}
      >
        <div
          className={`col-span-12 lg:col-span-5 ${
            index % 2 === 0 && "order-2"
          }`}
        >
          <div
            className={`bg-${color}-100 bg-opacity-75 flex justify-center items-center p-6 rounded-xl`}
          >
            <img src={img} alt={title} className="max-w-full w-full h-auto" />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7">
          <div className="mt-6 lg:mt-0 lg:px-12 text-center lg:text-start h-full flex flex-col justify-center">
            <h5 className="text-3xl md:text-[44px] leading-tight font-bold mb-4">
              {title}
            </h5>
            <p className="leading-loose opacity-80 mb-6 lg:pr-12">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

IndustryItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const Botcapability = () => {
  return (
    <section className="ezy__portfolio16 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="w-full">
            <h2 className="text-3xl md:text-[52px] font-bold text-center md:text-left">
              Our Bot Capability
            </h2>
          </div>
        </div>
        {botcap.map((item, i) => (
          <IndustryItem item={item} index={i} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Botcapability;
