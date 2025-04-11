// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCog, faSlidersH } from "@fortawesome/free-solid-svg-icons";

// const features = [
//   {
//     icon: faCog,
//     title: "An engaged audience",
//     desc: "To make shipping a sustainable vehicle for global trade and prosperity for the benefit of society at large.",
//   },
//   {
//     icon: faSlidersH,
//     title: "Teachable experience",
//     desc: "Country Growth and Societal Upliftment, Quality Technology, Enhancing Human Life",
//   },
// ];

// const FeaturedItem = ({ feature }) => {
//   return (
//     <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6 mb-6">
//       <div className="flex items-center mb-4">
//         <div className="flex items-center justify-center text-base p-4 text-white rounded-xl bg-blue-600 mr-3">
//           <FontAwesomeIcon icon={feature.icon} />
//         </div>
//         <h4 className="text-xl">{feature.title}</h4>
//       </div>
//       <p className="opacity-80 text-xl px-2">{feature.desc}</p>
//     </div>
//   );
// };

// const Mission = () => {
//   return (
//     <>
//       <section className="py-24 md:py-36 bg-white dark:bg-[#0b1727] text-black dark:text-white relative overflow-hidden z-10">
//         <div className="container px-4 mx-auto">
//           <div className="flex justify-center text-center">
//             <div>
//               <h1 className="text-3xl font-bold leading-tight md:text-[45px] mb-12">
//                 Our Vision
//               </h1>
//             </div>
//           </div>
//           <div className="grid grid-cols-12 gap-6">
//             <div className="col-span-12 lg:col-span-6">
//               <img
//                 src="https://cdn.easyfrontend.com/pictures/services/service20.png"
//                 alt=""
//                 className="w-full h-auto md:mt-12"
//               />
//             </div>
//             <div className="col-span-12 lg:col-span-5 mt-12">
//               {features.map((feature, i) => (
//                 <FeaturedItem feature={feature} key={i} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Mission;

import React from "react";

const Mission = () => {
  return (
    <>
      <section className="h-screen  lg:h-[50vh] xl:h-[50vh] mt-125 flex justify-center items-center bg-black ">
        <div className="bg-black h-auto mx-auto py-10 px-4 sm:px-10 lg:px-20 text-white grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="flex flex-col justify-center text-center sm:text-left">
            <h1 className="mb-6 text-4xl font-bold">Our Mission</h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 rounded-2xl bg-blue-800 p-6 sm:p-10 ">
            <div className="relative flex gap-5 items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-800 text-gray-500 text-lg flex items-center justify-center md:text-2xl">
                01
              </div>
              <div>
                <h3 className="text-xl font-semibold">Beginning</h3>
                <p className="text-gray-400 mt-3">
                  To make shipping a sustainable vehicle for global trade and
                  prosperity for the benefit of society at large.
                </p>
              </div>
            </div>

            <div className="relative flex gap-5 items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-800 text-gray-500 text-lg flex items-center justify-center md:text-2xl">
                02
              </div>
              <div>
                <h3 className="text-xl font-semibold">Storytelling</h3>
                <p className="text-gray-400 mt-3">
                  Country Growth and Societal Upliftment.
                </p>
              </div>
            </div>

            <div className="relative flex gap-5 items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-800 text-gray-500 text-lg flex items-center justify-center md:text-2xl">
                03
              </div>
              <div>
                <h3 className="text-xl font-semibold">Quality Technology</h3>
                <p className="text-gray-400 mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div className="relative flex gap-5 items-start">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-800 text-gray-500 text-lg flex items-center justify-center md:text-2xl">
                04
              </div>
              <div>
                <h3 className="text-xl font-semibold">Enhancing Human Life</h3>
                <p className="text-gray-400 mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
