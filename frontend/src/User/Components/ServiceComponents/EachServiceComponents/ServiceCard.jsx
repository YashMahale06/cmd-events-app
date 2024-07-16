import { Routes, Route } from "react-router-dom";
import redphotos from "../../../../Assets/Service_icons/redphotos.png";
import { useState } from "react";
import PropTypes from "prop-types";

const ServiceCard = ({
  showCard,
  category,
  ImageHref,
  description,
  title,
  button,
  buttonHref,
}) => {
  // const handleClick = () =>{

  //   setservicename({title});
  //   console.log(servicename);
  // }

  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      > 
        <div class="max-w-sm bg-white border-2 mb-8 rounded-lg shadow-lg border-red-600 hover:scale-105 duration-500 cursor-pointer">
          <a href="#">
            <img class="rounded-t-lg" src={ImageHref} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-red-500 ">
                {title}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 ">{description}</p>
            <a
              href={buttonHref}
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white-700 rounded-lg border-2 border-red-500"
            >
              <img src={redphotos} className="mr-2" />
              {button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ServiceCard;
