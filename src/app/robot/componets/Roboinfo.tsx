import React from "react";

const Roboinfo = () => {
  return (
    <>
      <section className="h-screen w-screen flex flex-col   sm:flex-col md:flex-col lg:flex-row xl:flex-row bg-black text-white ">
        <div className="w-full sm:w-full md:w-full xl:w-1/2 flex flex-col justify-center items-center sm:p-6 md:p-10 px-3">
          <div className="w-full  xl:h-full lg:h-full md:h-auto sm:h-auto flex flex-col justify-center items-start   ">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-6xl lg:text-4xl mb-2 font-medium xl:ml-15 ">
              Robotic Crawler
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl mb-4 xl:ml-15">
              Customize your own application
            </p>
            <p className="text-md sm:text-lg md:text-xl xl:text-xl lg:text-base mb-4 xl:ml-15">
              CLIIN Robotics' ROV is a versatile magnetic crawler suitable for
              an <br /> endless number of applications.
            </p>
            <p className="text-md sm:text-lg md:text-xl xl:text-xl  lg:text-base mb-4 xl:ml-15">
              The robot is no larger than a regular check-in suitcase and
              equipped with strong <br /> magnets to ensure adhesion and a
              tooling plate for attaching any sort of tool <br />
              or gear on top.
            </p>
            <p className="text-md sm:text-lg md:text-xl xl:text-xl lg:text-base xl:ml-15">
              The robot is fit for industrial cleaning and inspection jobs which
              require working in heights,
              <br />
              and with your own customized tools, the robot can simplify jobs
              across industries.
              <br /> It will make it easier to access hard-to-reach areas and
              can improve safety <br />
              and reduce manpower.
            </p>
          </div>
        </div>

        <div className="w-full sm:w-full md:w-full xl:w-1/2  flex justify-center items-center p-4 sm:p-6 md:p-10 ">
          <img
            src="https://cliin.dk/i/crawler.png"
            alt="Robotic Crawler"
            className="object-cover w-full h-auto rounded-md"
          />
        </div>
      </section>
    </>
  );
};

export default Roboinfo;
