"use client";

import React, { useEffect, useRef } from "react";

const InfiniteText = () => {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const words = [
    "Nexlify",
    "Tech",
    "Solutions",
    "Global",
    "Innovate",
    "Corp",
    "Tech",
    "Solutions",
    "Global",
    "Innovate",
    "Corp",
  ];

  useEffect(() => {
    const textElement = textRef.current;
    const containerElement = containerRef.current;
    const spans = textElement.querySelectorAll("span");
    let position = 0;
    let animationFrameId = null;

    const animate = () => {
      position -= 1; // Move up by 1px per frame

      
      const singleSetHeight = textElement.scrollHeight / 2; 
      const containerHeight = containerElement.getBoundingClientRect().height;
      if (position <= -(singleSetHeight - containerHeight)) {
        position += singleSetHeight; 
      }
      textElement.style.transform = `translateY(${position}px)`;

      // Calculate container center
      const containerRect = containerElement.getBoundingClientRect();
      const containerCenter = containerRect.top + containerRect.height / 2;

      // Update colors based on center position
      spans.forEach((span) => {
        const spanRect = span.getBoundingClientRect();
        const spanCenter = spanRect.top + spanRect.height / 2;
        if (Math.abs(spanCenter - containerCenter) < spanRect.height / 2) {
          span.classList.add("text-red-500");
          span.classList.remove("text-black");
        } else {
          span.classList.remove("text-red-500");
          span.classList.add("text-black");
        }
      });

      
      animationFrameId = requestAnimationFrame(animate);
    };

    
    animationFrameId = requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen w-32 overflow-hidden bg-gray-100 flex items-center justify-center"
    >
      <div
        ref={textRef}
        className="flex flex-col text-2xl font-bold text-center"
      >
        {/* Duplicate words for seamless looping */}
        {[...words, ...words].map((word, index) => (
          <span
            key={index}
            className="py-2 transition-colors duration-200 ease-in-out text-black"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InfiniteText;
