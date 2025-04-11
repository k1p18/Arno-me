"use client";
import React, { useState, useEffect } from "react";

const Workslider: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setImages([
      "https://cdn.pixabay.com/photo/2023/12/26/02/21/bird-8469368_640.jpg",
      "https://cdn.pixabay.com/photo/2024/03/27/17/14/ai-generated-8659507_640.jpg",
      "https://cdn.pixabay.com/photo/2022/09/05/08/07/butterfly-7433586_640.jpg",
      "https://cdn.pixabay.com/photo/2022/02/15/17/45/winter-7015372_640.jpg",
      "https://cdn.pixabay.com/photo/2024/05/23/13/23/moorente-8783210_640.jpg",
      "https://cdn.pixabay.com/photo/2023/01/23/17/38/seagull-7739257_640.jpg",
      "https://cdn.pixabay.com/photo/2022/08/22/12/42/bird-7403593_640.jpg",
      "https://cdn.pixabay.com/photo/2023/01/23/17/38/seagull-7739257_640.jpg",
    ]);
  }, []);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black px-4">
      <div className="relative w-full max-w-screen-xl aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9] xl:aspect-[16/9] overflow-hidden rounded-lg">
        {/* Slide Image */}
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={img}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/60 text-black p-2 md:p-3 rounded-full z-20"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/60 text-black p-2 md:p-3 rounded-full z-20"
        >
          ▶
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all ${
                idx === activeIndex ? "bg-white scale-110" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workslider;

// "use client";
// import React, { useState, useEffect } from "react";

// const Workslider: React.FC = () => {
//   const [images, setImages] = useState<string[]>([]);
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     setImages([
//       "https://cdn.pixabay.com/photo/2023/12/26/02/21/bird-8469368_640.jpg",
//       "https://cdn.pixabay.com/photo/2024/03/27/17/14/ai-generated-8659507_640.jpg",
//       "https://cdn.pixabay.com/photo/2022/09/05/08/07/butterfly-7433586_640.jpg",
//       "https://cdn.pixabay.com/photo/2022/02/15/17/45/winter-7015372_640.jpg",
//       "https://cdn.pixabay.com/photo/2024/05/23/13/23/moorente-8783210_640.jpg",
//       "https://cdn.pixabay.com/photo/2023/01/23/17/38/seagull-7739257_640.jpg",
//       "https://cdn.pixabay.com/photo/2022/08/22/12/42/bird-7403593_640.jpg",
//       "https://cdn.pixabay.com/photo/2023/01/23/17/38/seagull-7739257_640.jpg",
//     ]);
//   }, []);

//   const prevSlide = () => {
//     setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const goToSlide = (index: number) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="w-full h-screen flex items-center justify-center bg-black relative">
//       <div className="w-[90vw] lg:h-[75vh] xl:h-[75vh] md:h-[80vh] h-[85vh] object-cover relative overflow-hidden">
//         {/* Slides */}
//         {images.map((img, idx) => (
//           <div
//             key={idx}
//             className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
//               idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
//             }`}
//           >
//             <img
//               src={img}
//               alt={`Slide ${idx + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}

//         {/* Controls */}
//         <button
//           onClick={prevSlide}
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black p-2 rounded-full z-20"
//         >
//           ◀
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black p-2 rounded-full z-20"
//         >
//           ▶
//         </button>

//         {/* Dots */}
//         <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
//           {images.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => goToSlide(idx)}
//               className={`h-3 w-3 rounded-full transition-all ${
//                 idx === activeIndex ? "bg-white" : "bg-white/50"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Workslider;
