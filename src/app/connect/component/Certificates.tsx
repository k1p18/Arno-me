import React from "react";

const clientLogos = [
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-1.png",
    alt: "Logo 1",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-2.png",
    alt: "Logo 2",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-3.png",
    alt: "Logo 3",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-4.png",
    alt: "Logo 4",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-5.png",
    alt: "Logo 5",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-6.png",
    alt: "Logo 6",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-7.png",
    alt: "Logo 7",
  },
  {
    logo: "https://cdn.easyfrontend.com/pictures/logos/color-logo-8.png",
    alt: "Logo 8",
  },
];

const Certificates = () => {
  return (
    <>
      <section className=" bg-white  text-zinc-900">
        <div className="container px-4 mx-auto py-14 xl:py-35 lg:py-30  md:py-24">
          <div className="grid grid-cols-12 justify-center mb-16">
            <div className="col-span-12 lg:col-span-6 lg:col-start-4 text-center">
              <h2 className="font-bold text-[25px] lg:text-[35px] leading-none mb-6">
                Meet Our Clients & Partners
              </h2>
              <p className="text-lg leading-6 opacity-70">
                On-stream Robotic Inspections for Infrastructure Asset and Data
                Driven Decisions. Proudly, our robots are Made in India.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 sm:gap-8 justify-center text-center">
            {clientLogos.map((client, i) => (
              <div
                className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3"
                key={i}
              >
                <div className="bg-slate-100 dark:bg-[#1E2735] rounded-lg h-full grid place-items-center p-6 lg:p-12">
                  <img
                    src={client.logo}
                    alt={client.alt}
                    className="max-h-[100px] h-auto max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Certificates;
