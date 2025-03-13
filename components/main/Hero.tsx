import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-18 absolute top-[-270px] h-full w-full left-0 z-[1] object-cover md:h-3/4 md:-mt-10 lg:mt-0 lg:h-full hidden md:block"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;