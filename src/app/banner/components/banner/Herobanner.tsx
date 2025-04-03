// import React from "react";

// const Herobanner = () => {
//   return (
//     <>
//       <section className="flex justify-center gap-5 items-center h-[100vh] ">
//         <div className="max-w-lg">
//           <div className="flex flex-col justify-center items-center">
//             <h1 className="w-full text-start text-2xl font-bold md:text-6xl text-white">
//               Discover how artificial intelligence and robotics optimize CapEx
//             </h1>
//             <p className="mt-2 text-sm md:text-lg">
//               This video demonstrates how to drive confident decision making at
//               scale using features within the Cantilever operating platform.
//             </p>
//           </div>
//         </div>
//         <img
//           className="w-full xl:w-1/2 "
//           src="https://media.gettyimages.com/id/1409088189/photo/female-technician-programs-a-robot-arm-with-a-digital-tablet.jpg?s=612x612&w=0&k=20&c=sgR1gHjz28S4YZCsvScI0eUA5WACIzEgZfrS96RO1fs="
//           alt="imgg"
//         />
//       </section>
//     </>
//   );
// };

// export default Herobanner;
// text
import React from "react";

const Herobanner = () => {
  return (
    // <section className="relative h-screen flex items-center justify-center p-5">
    //   <div className="w-full flex flex-col items-center justify-center md:flex-row md:space-x-6 mb-10 md:mb-0">
    //     <div className="flex flex-col justify-center text-center md:text-left">
    //       <h1 className="font-bold mb-5 text-2xl sm:text-4xl  md:text-3xl lg:text-5xl xl:text-6xl text-white leading-snug md:leading-normal space-y-8 md:mb-2">
    //         Discover how artificial intelligence and robotics optimize CapEx
    //       </h1>
    //       <p className=" text-xl sm:text-lg md:text-xl xl:max-w-[560px] mx-auto md:mx-0">
    //         This video demonstrates how to drive confident decision making at
    //         scale using features within the Cantilever operating platform.
    //       </p>
    //     </div>
    //     <div className="flex justify-center items-center px-5  md:px-0 mt-6 md:mt-0">
    //       <img
    //         className="w-full sm:w-[80%] md:w-[1100px] lg:w-[1450px] xl:w-screen "
    //         src="https://media.gettyimages.com/id/1409088189/photo/female-technician-programs-a-robot-arm-with-a-digital-tablet.jpg?s=612x612&w=0&k=20&c=sgR1gHjz28S4YZCsvScI0eUA5WACIzEgZfrS96RO1fs="
    //         alt="AI and Robotics"
    //       />
    //     </div>
    //   </div>
    // </section>

    <section className="max-w-[1440px] container mx-auto px-5 py-35 flex flex-col md:flex-row items-center gap-12 md:py-0 sm:py-0 md:h-screen sm:h-screen">
      
        <div className="md:w-1/2 mb-8 md:mb-0 space-y-8">
          <h1 className="font-bold md:text-3xl lg:text-4xl text-4xl xl:text-6xl text-white leading-tight md:mb-3">
            Discover how artificial intelligence and robotics optimize CapEx
          </h1>
          <p className="text-gray-500 text-xl leading-relaxed max-w-xl md:text-xs lg:text-lg">
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

  );
};

export default Herobanner;
