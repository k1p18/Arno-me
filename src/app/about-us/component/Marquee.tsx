import React from "react";
import MarqueeItem from "./Textanimation";

const Marquee: React.FC = () => {
  const upperMarquee = [
    "Luffy",
    "Luffy",
    "Luffy",
    "Luffy",
    "Luffy",
    "Luffy",
    "Luffy",
    "Luffy",
    "Luffy",
    "Luffy",
    "Luffy",
    "Luffy",
    "Luffy",
    "Luffy",
    "Luffy",
    "Luffy",
  ];

  const lowerMarquee = [
    "Naruto",
    "Naruto",
    "Naruto",
    "Naruto",
    "Naruto",
    "Naruto",
    "Naruto",
    "Naruto",
    "Naruto",
    "Naruto",
    "Naruto",
    "Naruto",
  ];

  console.log("upperMarquee: ", upperMarquee);  // Log to check the array

  return (
    <div className="container mx-auto">
      {/* Upper Marquee */}
      <MarqueeItem texts={upperMarquee} from={0} to={"-100%"} />

      {/* Lower Marquee */}
      <MarqueeItem texts={lowerMarquee} from={"-100%"} to={0} />
    </div>
  );
};

export default Marquee;
