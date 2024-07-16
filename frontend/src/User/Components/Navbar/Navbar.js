import { useState, useEffect } from "react";
import logoEvent from "../../../Assets/logo.png";
import { TfiMenu } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";

import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#F8F4EC]">
      <nav
        className={`fixed w-full z-50 top-0 transition-all duration-300 p-4 ${
          scrolling
            ? "bg-[#F8F4EC] text-gray-700  "
            : "bg-transparent text-white "
        }`}
      >
        <div className="w-full mx-auto">
          <div className="container grid grid-cols-7 w-full gap-2 items-center justify-between">
            {/* Menu Button */}
            <div className="lg:hidden col-start-1 ml-8">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                {toggleMenu ? (
                  <TfiClose className="text-black"/>
                ) : (
                  <TfiMenu className="text-black"/>
                )}
              </button>
            </div>

            <div className="lg:space-x-6 col-start-2 col-span-2 flex justify-between lg:flex hidden">
              <a
                href="/home"
                className={`font-bold text-lg ${
                  scrolling ? "text-gray-500" : "text-gray-300"
                } hover:text-red-600 hover:underline hover:font-bold`}
              >
                Home
              </a>
              <a
                href="/services"
                className={`font-bold text-lg ${
                  scrolling ? "text-gray-500" : "text-gray-300"
                } hover:text-red-600 hover:underline hover:font-bold`}
              >
                Services
              </a>

              <div>
                <a
                  href="/gallery"
                  className={`font-bold text-lg ${
                    scrolling ? "text-gray-500" : "text-gray-300"
                  } hover:text-red-600 hover:underline hover:font-bold`}
                >
                  Gallery
                </a>
              </div>
            </div>

            {/* Logo */}
            <div className="col-start-4 col-span-1 rounded-lg mx-auto justify-items-center">
            <a href="/home">
              <img
                src={logoEvent}
                alt="Wedding Planner Logo"
                
                className="lg:h-16 lg:w-20 w-[60px] "
              />
              </a>
            </div>



            {/* Navigation Links - Right Side */}

            
            <div className="col-start-5 col-span-2  lg:space-x-4 flex justify-between lg:flex hidden">
            <a
                href="/recent_events"
                className={`font-bold text-lg ${
                  scrolling ? "text-gray-500" : "text-gray-300"
                } hover:text-red-600 hover:underline hover:font-bold`}
              >
                Recent Events
              </a>
              <a
                href="about"
                className={`font-bold text-lg ${
                  scrolling ? "text-gray-500" : "text-gray-300"
                } hover:text-red-600 hover:underline hover:font-bold`}
              >
                About Us
              </a>
              <a
                href="/contact"
                className={`font-bold text-lg ${
                  scrolling ? "text-gray-500" : "text-gray-300"
                }  hover:underline hover:font-bold`}
              >
                Contact Us
              </a>
              
            </div>
          </div>
        </div>
        {/* mobile navigation */}

        <div
          className={`fixed z-40 w-full bg-[#F8F4EC] text-black overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-96"
          }`}
        >
          <div className="px-8 py-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <a href="/home" className="border-l-4 border-gray-600">
                Home
              </a>
              <a href="/about">About</a>
              <a href="/services">Services</a>
              <a href="/gallery">Gallery</a>
              <a href="/recent_events">Recent Events</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
