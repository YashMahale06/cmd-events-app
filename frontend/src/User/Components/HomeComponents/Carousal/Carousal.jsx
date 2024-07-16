import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import backdrop1 from "../../../../Assets/backdrops/1.jpg";
import backdrop2 from "../../../../Assets/backdrops/2.jpg";
import backdrop3 from "../../../../Assets/backdrops/3.jpg";
import "./Carousal.css";
const Carousal = () => {
  return (
    <div className="h-screen mb-0">
      <Carousel
        className="mx-auto mb-0"
        showThumbs={false}
        width={"none"}
        emulateTouch={false}
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        swipeable={false}
        autoPlay
        infiniteLoop
      >
        <div className=" mx-auto ">
          <div className="h-screen relative">
            <div className="absolute left-0 w-full h-screen bg-black/60 text-gray-200 flex flex-col justify-center">
              <h1 className="!px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify ml-8">
                We <span className="text-red-500"></span>
              </h1>
              <h1 className="!px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify ml-8">
                {" "}
                <span className="text-red-500 ">Aim </span>To Make it perfect{" "}
              </h1>
            </div>
            <img
              className="w-full h-screen object-cover"
              src={backdrop1}
              alt="hello world"
            />
          </div>
        </div>
        <div className=" mx-auto">
          <div className="h-screen relative">
            <div className="absolute  w-full h-screen bg-black/60 text-gray-200 flex flex-col justify-center">
              <h1 className="px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify ml-8">
                An <span className="text-red-500">Experience</span>
              </h1>
              <h1 className="px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify ml-8">
                {" "}
                <span className="text-red-500"></span>To Remember{" "}
              </h1>
            </div>
            <img
              className="w-full h-screen object-cover"
              src={backdrop2}
              alt="hello world 2"
            />
          </div>
        </div>
        <div className=" mx-auto ">
          <div className="h-screen relative">
            <div className="absolute  w-full h-screen bg-black/60 text-gray-200 flex flex-col justify-center">
              <h1 className="px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify ml-8">
                We <span className="text-red-500"></span>
              </h1>
              <h1 className="px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify ml-8">
                {" "}
                <span className="text-red-500">Create </span>You Celebrate
              </h1>
            </div>
            <img
              className="w-full h-screen object-cover"
              src={backdrop3}
              alt="hello world 3"
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Carousal;
