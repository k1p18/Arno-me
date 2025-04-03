import { section } from "framer-motion/client";
import React from "react";

const Roboinq = () => {
  return (
    // <section className="h-[30vh] flex flex-col justify-center items-center  md:flex-col  lg:flex-row xl:flex-row p-4 bg-pink-300">
    //   <div className=" mr-8 h-full sm:w-full xl:w-full lg:w-full lg:mr-0 flex justify-center items-center  ">
    //     <img
    //       src="https://cliin.dk/i/crawler2.png"
    //       alt="xfds"
    //       className=" sm:h-auto p-3 md:h-[220PX]"
    //     />
    //   </div>
    //   <div className=" mr-22 lg:ml-0 ">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       strokeWidth={2.5}
    //       stroke="currentColor"
    //       className="size-22 md:ml-20 "
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         d="M12 4.5v15m7.5-7.5h-15"
    //       />
    //     </svg>
    //   </div>
    //   <div className="flex flex-col ">
    //     <h1 className="text-3xl sm:text-3xl md:text-4xl xl:text-6xl lg:text-3xl mb-4">
    //       Your Application
    //     </h1>
    //     {/* <button className="bg-transparent hover:bg-white text-white  hover:text-black py-3 border border-black-500 hover:border-transparent rounded">
    //       SUBMIT AN INQUARY
    //     </button> */}
    //     <button
    //       className="rounded-md border border-slate-300 py-3 px-1 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    //       type="button"
    //     >
    //       SUBMIT AN INQUARY
    //     </button>
    //   </div>
    // </section>

//     h-screen lg:h-[30vh] w-full flex flex-col justify-center items-center md:flex-col lg:flex-row xl:flex-row sm:p-10">
//   <div className="flex justify-center items-center mb-4 sm:w-full lg:w-[320px] max-w-full"
    <>
      <section className="h-screen w-full flex flex-col justify-center items-center md:flex-col xl:h-[30vh] lg:h-[30vh]  lg:flex-row xl:flex-row  sm:p-10 ">
        <div className="flex justify-center items-center mb-4 sm:w-full lg:w-[320px] max-w-full">
          <img
            src="https://cliin.dk/i/crawler2.png"
            alt="xfds"
            className="sm:h-[220px] md:h-[220px] p-3 "
          />
        </div>
        <div className="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-20 ml-20 mr-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
        <div className="text-center">
          <h1 className="text-3xl sm:text-2xl md:text-3xl xl:text-5xl lg:text-3xl mb-4">
            Your Application
          </h1>
          <button
            className="rounded-md border border-white py-3 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-white hover:text-black hover:bg-white hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            SUBMIT AN INQUIRY
          </button>
        </div>
      </section>
    </>
  );
};

export default Roboinq;
