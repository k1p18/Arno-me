"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Aboutus = () => {
  const styles = {
    mainer: "h-1/2 flex flex-col justify-center items-center bg-white mb-5",
    maint: "cursor-none ",
    cursur:
      "bg-gray-900 h-8 w-8 rounded-full fixed top-0 left-0 pointer-events-none",
    cursurHidden: "hidden",
  };

  type MousePosition = {
    x: number;
    y: number;
  };

  const [mousePostion, SetMousePostion] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const [cursurVariant, setCursurVariant] = useState("default");
  const [isInH1, setIsInH1] = useState(false);
  // const [isInSection, setIsInSection] = useState(false);
  // const [isInButton, setIsInButton] = useState(false);

  useEffect(() => {
    const mouseMove = (el: MouseEvent) => {
      SetMousePostion({
        x: el.clientX,
        y: el.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);
    // window.addEventListener("mousemove", mouseRemove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      // window.addEventListener("mousemove", mouseRemove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePostion.x - 16,
      y: mousePostion.y - 16,
    },
    text: {
      height: 60,
      width: 60,
      x: mousePostion.x - 35,
      y: mousePostion.y - 35,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => {
    setIsInH1(true);
    setCursurVariant("text");
  };
  const textLeave = () => {
    setIsInH1(false);
    setCursurVariant("default");
  };
  return (
    <>
      <section className="h-screen">
        <div className={styles.mainer}>
          <div className={styles.maint}>
            <motion.div
              className={
                isInH1 ? styles.cursur : styles.cursurHidden
                // isInSection || isInButton ? styles.cursur : styles.cursurHidden
              }
              variants={variants}
              animate={cursurVariant}
            ></motion.div>
            <h1
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="text-3xl font-bold text-black sm:text-2xl md:text-5xl"
            >
              About Us
            </h1>
          </div>
        </div>
        {/* <div className="flex flex-col md:flex-row  h-auto md:h-1/2">
          <div className="w-full md:w-1/4 flex justify-center items-center  p-4">
            <h1 className="text-2xl sm:text-xl md:text-xl lg:text-4xl font-semibold text-center">
              OUR MISSION
            </h1>
          </div>

          <div className="w-full md:w-3/4 flex justify-center items-center p-4 sm:p-6">
            <p className="text-base sm:text-sm md:text-base lg:text-2xl font-normal text-center md:text-left">
              At Arnobot Private Limited, we are fueled by innovation and a
              relentless pursuit of excellence in robotics. Incorporated under
              the Companies Act, 2013, we specialize in designing and developing
              cutting-edge robotic solutions tailored to address diverse
              industrial needs. At Arnobot, we believe in pushing boundaries to
              unlock new possibilities. Our team of dedicated engineers and
              visionaries collaborates to create solutions that bridge the gap
              between innovation and practicality, helping businesses thrive in
              an increasingly automated world.
            </p>
          </div>
        </div> */}
        <div className="flex flex-col xsm:flex-col asm:flex-col md:flex-row h-auto md:h-1/2 sm:h-1/2 xsm:h-1/2 asm:h-1/2">
          <div className="w-full xsm:w-full asm:w-full md:w-1/4 flex justify-center items-center p-2 sm:p-4 ">
            <h1 className="text-xl sm:text-xl md:text-xl lg:text-4xl font-semibold text-center">
              OUR MISSION
            </h1>
          </div>

          <div className="w-full xsm:w-full asm:w-full md:w-3/4 flex justify-center items-center p-6 xsm:p-6 asm:p-4">
            <p className="text-sm xsm:text-xs sm:text-sm md:text-base lg:text-2xl font-normal text-center md:text-left">
              At Arnobot Private Limited, we are fueled by innovation and a
              relentless pursuit of excellence in robotics. Incorporated under
              the Companies Act, 2013, we specialize in designing and developing
              cutting-edge robotic solutions tailored to address diverse
              industrial needs. At Arnobot, we believe in pushing boundaries to
              unlock new possibilities. Our team of dedicated engineers and
              visionaries collaborates to create solutions that bridge the gap
              between innovation and practicality, helping businesses thrive in
              an increasingly automated world.
            </p>
          </div>
        </div>
        <div className="flex flex-col xsm:flex-col asm:flex-col md:flex-row h-auto md:h-1/2 sm:h-1/2 xsm:h-1/2 asm:h-1/2">

          <div className="w-full xsm:w-full asm:w-full md:w-1/4 flex justify-center items-center p-2 sm:p-4 ">
            <h1 className="text-xl sm:text-xl md:text-xl lg:text-4xl font-semibold text-center">
              OUR EXPERTISE ?
            </h1>
          </div>
          <div className="w-full xsm:w-full asm:w-full md:w-3/4 flex flex-col justify-center items-start p-6 xsm:p-6 asm:p-4">
            <p className="text-sm xsm:text-xs sm:text-sm md:text-base lg:text-2xl font-normal text-center md:text-left mb-4">
              Our expertise lies in crafting intelligent systems that
              revolutionise industries, leveraging advanced technologies to
              enhance safety, efficiency, and productivity. Whether its
              task-specific robots, or custom automation solutions, we are
              committed to delivering precision-engineered products that
              redefine automation standards.
            </p>
            <p className="text-sm xsm:text-xs sm:text-sm md:text-base lg:text-2xl font-normal text-center md:text-left">
              Join us on our journey as we shape the future of robotics — one
              solution at a time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
