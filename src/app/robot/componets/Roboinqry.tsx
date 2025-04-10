import React from "react";

const Roboinqry = () => {
  return (
    <>
      <section className="h-screen w-full bg-black text-white  xl:h-[30vh] lg:h-[30vh]  flex justify-center items-center  ">
        <div className="flex flex-col justify-center items-center md:flex-col lg:flex-row xl:flex-row   ">
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
          <div className="text-center ">
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
        </div>
      </section>
    </>
  );
};

export default Roboinqry;
