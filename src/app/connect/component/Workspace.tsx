// Using Swiper

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const Workspace = () => {
  return (
    <>
      <section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-black text-opacity-80 dark:text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">
            My Latest Works
          </h2>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            navigation
            loop
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="Slide 1"
                className="w-full h-auto object-cover"
              />
              <div className="text-center mt-2">
                <h5 className="font-medium text-xl">Web Portal Dev</h5>
                <p>UI/UX Design</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                alt="Slide 2"
                className="w-full h-auto object-cover"
              />
              <div className="text-center mt-2">
                <h5 className="font-medium text-xl">E-commerce App</h5>
                <p>Mobile Design</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                alt="Slide 3"
                className="w-full h-auto object-cover"
              />
              <div className="text-center mt-2">
                <h5 className="font-medium text-xl">Product Dashboard</h5>
                <p>Web Design</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                alt="Slide 1"
                className="w-full h-auto object-cover"
              />
              <div className="text-center mt-2">
                <h5 className="font-medium text-xl">Web Portal Dev</h5>
                <p>UI/UX Design</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                alt="Slide 2"
                className="w-full h-auto object-cover"
              />
              <div className="text-center mt-2">
                <h5 className="font-medium text-xl">E-commerce App</h5>
                <p>Mobile Design</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                alt="Slide 3"
                className="w-full h-auto object-cover"
              />
              <div className="text-center mt-2">
                <h5 className="font-medium text-xl">Product Dashboard</h5>
                <p>Web Design</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Workspace;

// import React from "react";

// const Workspace = () => {
//   return (
//     <>
//       <section className="py-4 sm:py-6 md:py-8 lg:py-12">
//         <div className="max-w-full mx-auto">
//           <div
//             id="default-carousel"
//             className="relative rounded-lg overflow-hidden shadow-lg"
//             data-carousel="static"
//           >
//             <div className="relative h-64 sm:h-80 md:h-96" data-carousel-inner>
//               {/* Slide 1 */}
//               <div
//                 className="hidden duration-700 ease-in-out"
//                 data-carousel-item
//               >
//                 <img
//                   src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
//                   className="object-cover w-full h-full"
//                   alt="Slide 1"
//                 />
//               </div>

//               {/* Slide 2 */}
//               <div
//                 className="hidden duration-700 ease-in-out"
//                 data-carousel-item
//               >
//                 <img
//                   src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
//                   className="object-cover w-full h-full"
//                   alt="Slide 2"
//                 />
//               </div>

//               {/* Slide 3 */}
//               <div
//                 className="hidden duration-700 ease-in-out"
//                 data-carousel-item
//               >
//                 <img
//                   src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
//                   className="object-cover w-full h-full"
//                   alt="Slide 3"
//                 />
//               </div>
//             </div>

//             {/* Carousel Indicators */}
//             <div
//               className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2"
//               data-carousel-indicators
//             >
//               <button
//                 type="button"
//                 className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"
//               ></button>
//               <button
//                 type="button"
//                 className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"
//               ></button>
//               <button
//                 type="button"
//                 className="w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none focus:bg-gray-400 transition"
//               ></button>
//             </div>

//             {/* Carousel Navigation */}
//             <button
//               type="button"
//               className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
//               data-carousel-prev
//             >
//               <svg
//                 className="w-5 h-5 text-gray-600"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M15 19l-7-7 7-7"
//                 ></path>
//               </svg>
//             </button>
//             <button
//               type="button"
//               className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
//               data-carousel-next
//             >
//               <svg
//                 className="w-5 h-5 text-gray-600"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M9 5l7 7-7 7"
//                 ></path>
//               </svg>
//             </button>
//           </div>

//           <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Workspace;
