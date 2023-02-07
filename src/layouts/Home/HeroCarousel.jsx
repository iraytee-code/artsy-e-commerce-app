import React, { useState, useEffect } from "react";
import image1 from "../../assets/images/sliderImages/picture1.png";
import image2 from "../../assets/images/sliderImages/picture2.png";
import image3 from "../../assets/images/sliderImages/picture3.png";
import image4 from "../../assets/images/sliderImages/picture4.png";
import image5 from "../../assets/images/sliderImages/picture5.png";
const HeroCarousel = () => {
  // diplay all the images in a state and setit into an array
  const [images, setImages] = useState([
    image1,
    image2,
    image3,
    image4,
    image5,
  ]);
  //declare animation state
  const [animate, setAnimate] = useState(true);

  //a function that shuffles the array
  function arrayShuffler(originalArray) {
    //set animate state to false while shuffling
    setAnimate(false);
    //spread array value into a new variable
    let array = [...originalArray];
    let currentIndex = array.length;
    let temporaryValue = null;
    let randomIndex = null;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  useEffect(() => {
    //Shuffling the array every 5 seconds
    setAnimate(true);
    const interval = setInterval(() => {
      setImages((currentItems) => arrayShuffler(currentItems));
    }, 5000);
    setTimeout(() => setAnimate(false), 1500);
    return () => clearInterval(interval);
  }, [images]);

  //Map through the images array to display them
  const heroImage = images.map((item, index) => {
    return (
      <div
        key={index}
        className={`h-[505px] w-[360px] overflow-hidden ${
          animate ? "item" : ""
        }`}
      >
        <img src={item} alt="image" className="" />
      </div>
    );
  });

  return (
    <div
      className={`hidden md:grid grid-cols-5 gap-[18px] content-center border-red-500 w-max mt-[50px] mb-[162px]`}
    >
      {heroImage}
    </div>
  );
};

export default HeroCarousel;
