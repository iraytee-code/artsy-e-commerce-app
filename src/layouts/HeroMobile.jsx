import React from "react";
import imageOne from "../assets/images/mobileHero/image1.png";
import imageTwo from "../assets/images/mobileHero/image2.png";
import imageThree from "../assets/images/mobileHero/image3.png";

const HeroMobile = () => {
  return (
    <div className="mt-16 mb-[100px] md:hidden ">
      <div className="relative h-[300px] w-fit mx-auto">
        <img
          src={imageOne}
          alt="image-one"
          className="absolute top-0 left-1/2 -z-10 h-full -translate-x-1/2 -rotate-[9.31deg]"
        />
        <img
          src={imageTwo}
          alt="image-two"
          className="absolute top-0 left-1/2 -z-10 h-full -translate-x-1/2 rotate-[7.75deg]"
        />
        <img src={imageThree} alt="image-three" className="left-1/2 h-full" />
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default HeroMobile;
