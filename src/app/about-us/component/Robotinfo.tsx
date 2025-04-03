import React from "react";
import Roboinq from "./Roboinq";

const Robotinfo = () => {
  return (
    <>
      {/* <div className="min-h-screen min-w-screen flex  flex-col justify-center items-center bg-green-800 sm:flex-col md:flex-col xl:flex-row ">
        <div className="w-full sm:w-full md:w-1/2 xl:w-1/2 flex flex-col justify-center items-center text-center bg-blue-800  p-4 sm:p-6 md:p-10">
          <div className="w-full  xl:h-full md:h-full  sm:h-auto  flex flex-col justify-center items-center p-4 border-2  ">
            <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4 font-medium">
              Robotic Crawler
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-4">
              Customize your own application
            </p>
            <p className="text-md sm:text-lg md:text-xl mb-4">
              CLIIN Robotics' ROV is a versatile magnetic crawler suitable for
              an <br /> endless number of applications.
            </p>
            <p className="text-md sm:text-lg md:text-xl mb-4">
              The robot is no larger than a regular check-in suitcase and
              equipped with strong <br /> magnets to ensure adhesion and a
              tooling plate for attaching any sort of tool <br />
              or gear on top.
            </p>
            <p className="text-md sm:text-lg md:text-xl">
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
        <div className="w-full sm:w-full md:w-1/2 xl:w-1/2 bg-amber-700 flex justify-center items-center p-4 sm:p-6  ">
          <img
            src="https://cliin.dk/i/crawler.png"
            alt="asa"
            className="object-cover p-4"
          />
        </div>
      </div> */}
      <>
        <section className="h-screen w-screen flex flex-col   sm:flex-col md:flex-col lg:flex-row xl:flex-row  ">
          <div className="w-full sm:w-full md:w-full xl:w-1/2 flex flex-col justify-center items-center   p-4 sm:p-6 md:p-10">
            <div className="w-full  xl:h-full lg:h-full md:h-auto sm:h-auto flex flex-col justify-center items-start p-4   ">
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
                The robot is fit for industrial cleaning and inspection jobs
                which require working in heights,
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
       
        {/* <Roboinq /> */}
        
      </>
    </>
  );
};

export default Robotinfo;
