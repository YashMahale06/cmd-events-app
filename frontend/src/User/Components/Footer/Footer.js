import React from "react";
import logo from "../../../Assets/logo.png";
import bg1 from "../../../Assets/Footer_Images/background/bg1.jpeg";
import bg2 from "../../../Assets/Footer_Images/background/bg2.jpg";
import bg3 from "../../../Assets/Footer_Images/background/bg3.jpg";
import bg4 from "../../../Assets/Footer_Images/background/bg2.jpg";

import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  const handleInstagramClick = () => {
    const instagramUrl =
      "https://www.instagram.com/cmdevent.nashik?igsh=YzFuenRyZnlrN2tx";
    window.open(instagramUrl, "_blank");
  };
  const handleFacebookClick = () => {
    const facebookUrl = "https://www.instagram.com/your_instagram_handle/";
    window.open(facebookUrl, "_blank");
  };
  const handleWhatAppClick = () => {
    const whatsAppUrl = "https://www.instagram.com/your_instagram_handle/";
    window.open(whatsAppUrl, "_blank");
  };
  const iconSize = 24;
  return (
    <div>
      <footer className="relative bg-[#F8F4EC] pt-4">
        <div className="container mx-auto px-4">
          <div className="items-center">
            <div className="text-center justify-center px-4">
              <h4 className="text-md font-bold items-center text-gray-900 mb-4">
                STAY SOCIAL
              </h4>
              <a
                className="text-2xl mt-4 hover:underline mb-2 text-black-300 text-[rgba(201,164,142,1)]"
                href=""
              >
                Follow Us On Social Media !!!
              </a>
            </div>
          </div>
          <div className="mt-2 lg:mb-0 mb-6 flex justify-center mx-auto">
            <button
              className=" transition duration-300 ease-in-out transform hover:scale-110 bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
              href="/"
            >
              <FaTwitter size={iconSize} className="ml-2 " />
            </button>
            <button
              className=" transition duration-300 ease-in-out transform hover:scale-110 bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <FaFacebookSquare size={iconSize} className="ml-2" />
            </button>
            <button
              className=" transition duration-300 ease-in-out transform hover:scale-110 bg-white text-purple-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
              onClick={handleInstagramClick}
            >
              <FaInstagram size={iconSize} className="ml-2" />
            </button>
            <button
              className="transition duration-300 ease-in-out transform hover:scale-110 bg-white text-green-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              <FaWhatsapp size={iconSize} className="ml-2 " />
            </button>
          </div>
          <div className="hidden lg:flex justify-center mx-automd:flex m-4 gap-2">
            <img
              className="md:w-32 md:h-28 lg:w-36 lg:h-32 rounded-lg hover:scale-105 duration-500 cursor-pointer"
              alt="image"
              src={bg1}
            />
            <img
              className="md:w-32 md:h-28 lg:w-36 lg:h-32 rounded-lg hover:scale-105 duration-500 cursor-pointer"
              alt="image m-2"
              src={bg2}
            />
            <img
              className="md:w-32 md:h-28 lg:w-36 lg:h-32 rounded-lg hover:scale-105 duration-500 cursor-pointer"
              alt="image"
              src={bg3}
            />
            <img
              className="md:w-32 md:h-28 lg:w-36 lg:h-32 rounded-lg hover:scale-105 duration-500 cursor-pointer"
              alt="image"
              src={bg4}
            />
            <img
              className="md:w-32 md:h-28 lg:w-36 lg:h-32 rounded-lg hover:scale-105 duration-500 cursor-pointer"
              alt="image"
              src={bg1}
            />
          </div>

          <div className="mt-8 mb-4 lg:mb-8 md:mb-8 flex justify-between lg:mx-96 md:mx-8">
            <a
              href="/home"
              className="hidden lg:flex md:flex lg:mt-4 hover:underline cursor-pointer text-gray-600 font-semibold hover:text-black uppercase"
            >
              Home
            </a>
            <a
              href="/services"
              className="hidden lg:flex md:flex lg:mt-4 hover:underline cursor-pointer text-gray-600 font-semibold hover:text-black uppercase"
            >
              Services
            </a>
            <a href="/home" className="flex items-center lg:mx-0 md:mx-0 justify-center w-full lg:w-auto md:w-auto">
              <img
                className="lg:w-24 lg:h-20 md:w-24 md:h-20 w-20 h-16 lg:ml-0"
                src={logo}
              ></img>
            </a>
            <a
              href="/about"
              className="hidden lg:flex md:flex lg:mt-4 hover:underline cursor-pointer text-gray-600 font-semibold hover:text-black uppercase"
            >
              Why us
            </a>
            <a
              href="/contact"
              className="hidden lg:flex md:flex lg:mt-4 hover:underline cursor-pointer text-gray-600 font-semibold hover:text-black uppercase"
            >
              Contact
            </a>
          </div>

          <hr className="border-2 border-white"></hr>
        </div>
      </footer>
    </div>
  );
}
