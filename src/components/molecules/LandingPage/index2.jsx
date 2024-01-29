import React from "react";
import Image from "next/image";

const Animations = () => {
  return (
    <div>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="min-h-screen">
        <div className="hidden sm:flex absolute left-[45%] top-[30%]">
          <Image
            src="https://res.cloudinary.com/dqbcbqcbr/image/upload/v1706376690/image_39_us9ao2.png"
            alt="OpenCode"
            width={200}
            height={200}
          />
        </div>
        <div className="hidden sm:flex absolute left-[39.75%] top-[52.5%]">
          <Image
            src="https://res.cloudinary.com/dqbcbqcbr/image/upload/v1706546450/image_40_hbqwcq.png"
            alt="OpenCode"
            width={400}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Animations;
