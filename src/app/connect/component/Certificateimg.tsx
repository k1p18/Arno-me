import React from "react";

// Your carti list data
const cartiList = [
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio19.jpg",
    title: "Web Portal Dev",
    categories: ["UI/UX Design"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_2.png",
    title: "Web Portal Dev",
    categories: ["UI/UX Design"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio17.jpg",
    title: "Web Portal Dev",
    categories: ["UI/UX Design"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio14.jpg",
    title: "Web Portal Dev",
    categories: ["UI/UX Design"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio5.jpg",
    title: "Web Portal Dev",
    categories: ["UI/UX Design"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio7.jpg",
    title: "Web Portal Dev",
    categories: ["UI/UX Design"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio11.jpg",
    title: "Web Portal Dev",
    categories: ["UI/UX Design"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio8.jpg",
    title: "Web Portal Dev",
    categories: ["UI/UX Design"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_2.png",
    title: "Web Portal Dev",
    categories: ["UI/UX Design"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio10.jpg",
    title: "Web Portal Dev",
    categories: ["UI/UX Design"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio3.jpg",
    title: "Web Portal Dev",
    categories: ["UI/UX Design"],
  },
  {
    image: "https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_5.png",
    title: "Web Portal Dev",
    categories: ["UI/UX Design"],
  },
];

const Certificateimg = () => {
  return (
    <section className="ezy__portfolio5 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-black text-opacity-80 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 justify-center mb-6 md:mb-12">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
            <p className="mb-2">THIS IS WHAT WE DO</p>
            <h2 className="text-3xl md:text-[45px] font-bold mb-6">
              Our Latest Works
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {cartiList.map((carti, i) => (
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3"
              key={i}
            >
              <div className="rounded-xl overflow-hidden duration-300 relative hover:-translate-y-1">
                <img
                  src={carti.image}
                  alt={carti.title}
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />
                {/* <div className="absolute top-0 left-0 right-0 bottom-0 rounded-xl bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 backdrop-blur scale-90 opacity-0 flex flex-col justify-center items-center transition duration-300 text-center hover:scale-100 hover:opacity-100 p-4">
                  <h5 className="text-xl font-medium mb-2 text-white">
                    {carti.title}
                  </h5>
                  <p className="mb-0 text-white">
                    {carti.categories.join(", ")}
                  </p>
                </div> */}
              </div>
            </div>
          ))}
        </div>               
      </div>
    </section>
  );
};

export default Certificateimg;
