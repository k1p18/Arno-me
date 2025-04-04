import React from "react";

const Usecasesol = () => {
  return (
    <>
      <section className="min-h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center ">
          <div className="mb-6">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="text-2xl relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                SELECT SERVICE BY ASSET
              </span>
            </button>
          </div>
          <div className="mb-4">
            <h1 className="text-xl text-center lg:text-4xl  xl:text-4xl md:text-4xl  font-bold">
              Altius Bot Robotic Inspection Services
            </h1>
          </div>
          <div className="mb-4">
            <p className="text-base lg:text-2xl  xl:text-2xl md:text-xl p-0.5 text-center">
              Our Flexible Robotic Platform can be customized to inspect the
              asset that perfectly suits your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-8 p-4 flex-grow mt-4">
            <div className="flex flex-col justify-center items-center mb-5">
              <h1 className="text-3xl mb-2">Storage Tank</h1>
              <p className="mb-4">Hul Cleaning</p>
              <img
                className="h-[350px] rounded-sm mb-4 opacity-20 hover:opacity-100 duration-1500"
                src="https://petrobot.co.in/assets/images/site/assets/tank_img.jpg"
                alt=""
              />
              <p className="text-2xl mt-4">Altius</p>
            </div>
            <div className="flex flex-col justify-center items-center mb-5">
              <h1 className="text-3xl mb-2">Storage Tank</h1>
              <p className="mb-4">Deck Cleaning</p>
              <img
                className="h-[350px] rounded-sm mb-4 opacity-20 hover:opacity-100 duration-1500"
                src="https://petrobot.co.in/assets/images/site/assets/2ndpass_img.png"
                alt=""
              />
              <p className="text-2xl mt-4">Altius</p>
            </div>
            <div className="flex flex-col justify-center items-center mb-5">
              <h1 className="text-3xl mb-2">Storage Tank</h1>
              <p className="mb-4">Inspection</p>
              <img
                className="h-[350px] rounded-sm mb-4 opacity-20 hover:opacity-100 duration-1500"
                src="https://petrobot.co.in/assets/images/site/assets/boiler_img.jpg"
                alt=""
              />
              <p className="text-2xl mt-4">Altius</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl mb-2">Storage Tank</h1>
              <p className="mb-4">Visual Inspection</p>
              <img
                className="h-[350px] rounded-sm mb-4 opacity-20 hover:opacity-100 duration-1500"
                src="https://petrobot.co.in/assets/images/site/assets/pipeline_img.jpg"
                alt=""
              />
              <p className="text-2xl mt-4">Altius</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Usecasesol;
