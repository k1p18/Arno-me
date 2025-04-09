import React from "react";

const Herobanner = () => {
  return (
    <>
      <section className="max-w-[1440px] container mx-auto px-5 py-35 flex flex-col md:flex-row items-center gap-12 md:py-0 sm:py-0 md:h-screen sm:h-screen">
        <div className="md:w-1/2 mb-8 md:mb-0 space-y-8">
          <h1 className="font-bold md:text-3xl lg:text-4xl text-4xl xl:text-6xl text-black leading-tight md:mb-3">
            Discover how artificial intelligence and robotics optimize CapEx
          </h1>
          <p className="text-gray-900 text-xl leading-relaxed max-w-xl md:text-xs lg:text-lg">
            This video demonstrates how to drive confident decision making at
            scale using features within the Cantilever operating platform.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            className="w-full "
            src="https://media.gettyimages.com/id/1409088189/photo/female-technician-programs-a-robot-arm-with-a-digital-tablet.jpg?s=612x612&w=0&k=20&c=sgR1gHjz28S4YZCsvScI0eUA5WACIzEgZfrS96RO1fs="
            alt="AI and Robotics"
          />
        </div>
      </section>
    </>
  );
};

export default Herobanner;
