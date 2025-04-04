import React from "react";

const workList = [
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio6.jpg",
    title: "Branding",
    description:
      "Sed ut in perspiciatis unde omnis iste natus error sit on i tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.",
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio10.jpg",
    title: "Marketing",
    description:
      "It’s easier to reach your savings goals when you have the right savings account. It’s easier to reach your savings goals when you have the right savings account.",
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio16.jpg",
    title: "Development",
    description:
      "Vitae bibendum egestas magna sit elit non. Netus volutpat dignissim pharetra felis. Orci commodo mauris digital industry is booming adipiscing semper amet.",
  },
];

const Workrecord = () => {
  return (
    <section className="ezy__portfolio8 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-slate-800 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 justify-center mb-6 md:mb-12">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
            <p className="mb-2 text-lg">THIS IS WHAT WE DO</p>
            <h2 className="text-3xl md:text-[45px] font-bold mb-6">Our Latest Works</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {workList.map((worklist, i) => (
            <div className="col-span-1" key={i}>
              <div className="relative bg-white shadow-xl dark:bg-slate-800 hover:-translate-y-1 transition duration-300 rounded-xl">
                <div className="bg-green-100 flex rounded-xl p-6 lg:p-12 pt-0 lg:pt-0 relative">
                  <img
                    src={worklist.image}
                    alt={worklist.title}
                    className="w-full h-auto object-cover -mb-24 mt-12 rounded-xl"
                  />
                </div>
                <div className="p-6 lg:p-12 mt-20">
                  <h4 className="text-2xl font-medium mb-4">{worklist.title}</h4>
                  <p className="opacity-70 mb-4">{worklist.description}</p>
                  <button className="px-5 py-2 rounded border border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 mt-6">
                    {worklist.title}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workrecord;
