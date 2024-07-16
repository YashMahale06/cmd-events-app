import React from "react";
import wedding from "../../../../Assets/Home_Images/Service_icons/wedding.png";
import corporate from "../../../../Assets/Home_Images/Service_icons/corporate.png";
import social from "../../../../Assets/Home_Images/Service_icons/social.png";

const Services = () => {
  return (
    <section>
    <div className="p-20 w-full h-full bg-[#F8F4EC]">
      <div className="mx-auto mt-4 mb-8 text-center">
        <span className="font-bold mb-8 block text-4xl text-gray-800">
          Our Services
        </span>

        <span className="font-normal mb-2 block text-xl text-gray-600">
          Planning an event but no idea where to start? Cmd Events!
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* First Icon */}
        <div className="flex col-span-1 flex-col items-center">
          <img className="w-20 h-20 " src={wedding}></img>

          <h1 className="text-2xl font-semibold text-gray-400 mt-4 lg:mt-12">
            Weddings
          </h1>

          <ul className="mt-2 text-center">
            <li className="m-2 text-lg text-center text-gray-600">
              - <a href="#">Ceremonies</a>
            </li>
            <li className="m-2 text-lg text-center text-gray-600">
              - <a href="#">Receptions</a>
            </li>
            <li className="m-2 text-lg text-center text-gray-600">
              - <a href="#">Mehendi Events</a>
            </li>
            <li className="m-2 text-lg text-center text-gray-600">
              - <a href="#">Sangeet Events</a>
            </li>
            <li className="m-2 text-lg text-center text-gray-600">
              - <a href="#">Special Entry</a>
            </li>
          </ul>
        </div>

        {/* Second Icon */}
        <div className="flex flex-col items-center">
          <img className="w-20 h-20 " src={corporate}></img>
          <h1 className="text-2xl font-semibold text-gray-400 mt-4 lg:mt-12">
            Corporate
          </h1>

          <ul className="mt-2">
            <li className="m-2 text-lg text-center text-gray-600">
              - <a href="#">Product Lanches</a>
            </li>
            <li className="m-2 text-lg text-center text-gray-600">
              - <a href="#">Conference</a>
            </li>
            <li className="m-2 text-lg text-center text-gray-600">
              - <a href="#">WorkShops</a>
            </li>
            <li className="m-2 text-lg text-center text-gray-600">
              - <a href="#">Sales Event</a>
            </li>
            <li className="m-2 text-lg text-center text-gray-600">
              - <a href="#">More!</a>
            </li>
          </ul>
        </div>

        {/* Third Icon */}
        <div className="flex flex-col items-center">
          <img className="w-20 h-20 " src={social}></img>
          <h1 className="text-2xl font-semibold text-gray-400 mt-4 lg:mt-12">Social</h1>

          <ul className="mt-2 ">
            <li className="m-2 text-lg text-center text-gray-600">
              - <a href="#">Birthday Parties</a>
            </li>
            <li className="m-2 text-lg text-center text-gray-600">
              - <a href="#">Anniversary Parties</a>
            </li>
            <li className="m-2 text-lg text-center text-gray-600">
              - <a href="#">Retirement Parties"</a>
            </li>
            <li className="m-2 text-lg text-center text-gray-600">
              - <a href="#">More!</a>
            </li>
          </ul>
        </div>

        {/* Fourth Icon */}
        <div className="flex flex-col items-center">
          <img className="w-20 h-20 " src={wedding}></img>
          <h1 className="text-2xl font-semibold text-gray-400 mt-4 lg:mt-12">
            Weddings
          </h1>
          <ul className="mt-2">
            <li className="m-2 text-lg text-center text-gray-600">
              - <a href="#">Ceremonies</a>
            </li>
            <li className="m-2 text-lg text-center text-gray-600">
              - <a href="#">Receptions</a>
            </li>
            <li className="m-2 text-lg text-center text-gray-600">
              - <a href="#">Mehendi Sangeet Events"</a>
            </li>
            <li className="m-2 text-lg text-center text-gray-600">
              - <a href="#">Special Entry</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Services;
