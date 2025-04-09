import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';  

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
            navigation={true}
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
            {/* Repeat for other slides */}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Workspace;
