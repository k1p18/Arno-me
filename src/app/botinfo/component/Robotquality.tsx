import React from "react";
// import PropTypes from "prop-types";

const CardItem = ({ item }) => (
  <div className="mb-6 text-center">
    {" "}
    <h3 className="font-black text-3xl md:text-[45px] mb-4">{item.count}</h3>
    <h5 className="text-2xl font-medium mb-2">{item.title}</h5>
    <p className="text-xl mb-0">{item.detail}</p>
  </div>
);

// CardItem.propTypes = {
//   item: PropTypes.shape({
//     count: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     detail: PropTypes.string.isRequired,
//   }).isRequired,
// };

const Cards = () => {
  const cards = [
    {
      count: "432",
      title: "Completed Event",
      detail:
        "Partner removes the hassle and confusion that comes from managing.",
    },
    {
      count: "758",
      title: "Game Completed",
      detail:
        "It’s no secret that the digital. From exciting startups to global brands.",
    },
    {
      count: "31+",
      title: "Completed Fund",
      detail: "Sed ut in perspiciatis unde omnis iste natus error sit tatem.",
    },
    {
      count: "994+",
      title: "Completed Ticket",
      detail:
        "Viverra tellus in hac habitasse platea dictumst tempor id eu nisl.",
    },
  ];

  const divider = Math.ceil(cards.length / 2);

  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      {" "}
      <div className="flex flex-col sm:w-1/2">
        {cards.slice(0, divider).map((item, index) => (
          <CardItem item={item} key={item.title + index} />
        ))}
      </div>
      <div className="flex flex-col sm:w-1/2 mt-6 sm:mt-0">
        {cards.slice(divider).map((item, index) => (
          <CardItem item={item} key={item.title + index} />
        ))}
      </div>
    </div>
  );
};

const Robotquality = () => {
  return (
    <>
      <section className=" bg-white text-zinc-900">
        <div className="container flex flex-col justify-center items-center px-4 mt-4 xl:py-42  mx-auto md:py-24 ">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12  xl:col-span-6">
              <div>
                <h1 className="text-3xl md:text-[45px] font-bold leading-snug mb-4 text-center">
                  {" "}
                  {/* Added text-center to center the heading */}
                  Some Important Numbers
                </h1>
                <p className="text-lg opacity-80 mb-12 text-center">
                  {" "}
                  {/* Added text-center to center the paragraph */}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime quod perferendis nihil cupiditate aliquid qui
                  exercitationem labore veritatis eaque nobis libero earum.
                </p>
              </div>
              <Cards />
            </div>

            <div className="col-span-12 xl:col-span-6 xl:col-start-8 flex justify-center items-end h-full mt-12 md:mt-0">
              <img
                src="https://arnobot.in/_next/image?url=%2Fwebsite%2Fbot.png&w=640&q=75"
                alt="Some Important Numbers Illustration"
                className="max-w-full h-auto rounded-lg mt-4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Robotquality;
