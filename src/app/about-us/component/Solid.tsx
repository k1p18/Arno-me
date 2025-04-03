import React, { useEffect, useRef } from "react";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"

const SlideData = [
  {
    imgSrc:
      "https://images.unsplash.com/photo-1596075780750-81249df16d19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    title: "Virat Kohli",
    Decs: "If you are upgrading from Swiper 9 to Swiper 10, check out Migration Guide to Swiper 10",
    categories: ["Linkedin", "Mail"],
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1596075780750-81249df16d19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    title: "Virat Kohli",
    Decs: "If you are upgrading from Swiper 9 to Swiper 10, check out Migration Guide to Swiper 10",
    categories: ["Linkedin", "Mail"],
    post: "M. Director",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1596075780750-81249df16d19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    title: "Virat Kohli",
    Decs: "If you are upgrading from Swiper 9 to Swiper 10, check out Migration Guide to Swiper 10",
    categories: ["Linkedin", "Mail"],
    post: "M. Director",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1596075780750-81249df16d19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    title: "Virat Kohli",
    Decs: "If you are upgrading from Swiper 9 to Swiper 10, check out Migration Guide to Swiper 10",
    categories: ["Linkedin", "Mail"],
    post: "M. Director",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1596075780750-81249df16d19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    title: "Virat Kohli",
    Decs: "If you are upgrading from Swiper 9 to Swiper 10, check out Migration Guide to Swiper 10",
    categories: ["Linkedin", "Mail"],
    post: "M. Director",
  },
];

const Solid = () => {
  const swiperWrapped = useRef(null);

  function adjustMargin() {
    const screenWidth = window.innerWidth;

    if (swiperWrapped.current) {
      swiperWrapped.current.style.marginLeft =
        screenWidth <= 520
          ? "0px"
          : screenWidth <= 650
          ? "-50px"
          : screenWidth <= 800
          ? "-100px"
          : "-150px";
    }
  }

  useEffect(() => {
    adjustMargin();
    window.addEventListener("resize", adjustMargin);
    return () => window.removeEventListener("resize", adjustMargin);
  }, []);

  return (
    <>
      <main>
        <div className="container">
          <Swiper
            modules={[Pagination]}
            grabCursor
            initialSlide={2}
            centeredSlides
            slidesPerView="auto"
            speed={800}
            slideToClickedSlide
            pagination={{ clickable: true }}
            breakpoints={{
              320: { spaceBetween: 40 },
              650: { spaceBetween: 30 },
              1000: { spaceBetween: 20 },
            }}
            onSwiper={(swiper) => {
              swiperWrapped.current = swiper.wrapperEl;
            }}
          >
            {SlideData.map((slide, index) => (
              <SwiperSlide key={index}>
                <img src={slide.imgSrc} alt={slide.title} />
                <div className="title">
                  <h1>{slide.title}</h1>
                </div>
                <div className="content">
                  <div className="text-box">
                    <p>{slide.Decs}</p>
                  </div>
                  <div className="footer">
                    <div className="category">
                      {slide.categories.map((category, idx) => (
                        <span key={idx} style={{ "--i": idx + 1 }}>
                          {category}
                        </span>
                      ))}
                    </div>
                    <button>
                      <span className="label">{post}</span>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </>
  );
};

export default Solid;
