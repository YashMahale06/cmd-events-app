import React from "react";
import s4 from "../../../../Assets/about_icons/s4.jpeg";
import calender from "../../../../Assets/about_icons/calender.png";
import smile from "../../../../Assets/about_icons/smile.png";
import event from "../../../../Assets/about_icons/event.png";
import thumb from "../../../../Assets/about_icons/thumb.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <section className="py-10 lg:py-16 bg-[#ebe9e5] font-poppins ">
        <span className="text-4xl text-black uppercase ">
          <h1 className="text-center mb-12 items-center justify-center text-gray-800">
            {" "}
            Who we are?
          </h1>
        </span>
        <div className="max-w-7xl py-4 mx-auto lg:py-12 md:px-12 rounded-sm ">
          <div className="flex flex-wrap bg-[#ebe9e5]">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="lg:max-w-md">
                <div className="px-4 pl-4 mb-6 border-l-4 border-[rgba(190,173,150,1)]">
                  <h1 className="mt-2 text-3xl font-black text-gray-800 md:text-5xl text-left">
                    About Us
                  </h1>
                </div>

                <p className="px-4 mb-10 text-base text-left leading-7 text-gray-900 ">
                  <span className="text-red-600 font-bold ">CMD Events</span>:
                  <span className="text-gray-600 ">
                    {" "}
                    Your trusted event management partner with over seven years
                    of experience. We prioritize safety and specialize in
                    personalized, detail-oriented planning for all occasions,
                    from personal celebrations to corporate milestones and
                    entertainment showcases. Trust us to handle every aspect of
                    your event seamlessly.
                  </span>
                </p>

                <div className="flex flex-wrap items-center">
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6 hover:scale-105 duration-500 cursor-pointer">
                    <div className="p-4 bg-white rounded-xl  ">
                      <span className="text-red-500 justify-content-center flex">
                        <img
                          className=" w-8 h-8 text-center "
                          src={calender}
                        ></img>

                        <p className="mb-2 ml-8 text-3xl  font-bold text-red-600 ">
                          7
                        </p>
                      </span>
                      <h2 className="text-md text-red-600">Years</h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6 hover:scale-105 duration-500 cursor-pointer">
                    <div className="p-6 bg-white rounded-xl">
                      <span className="text-red-500 justify-content-center flex">
                        <img className=" w-8 h-8 text-center" src={smile}></img>

                        <p className=" mb-2 ml-4 text-2xl font-bold text-red-600 ">
                          1000
                        </p>
                      </span>
                      <h2 className="text-md text-red-600 ">Happy Clients</h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6 hover:scale-105 duration-500 cursor-pointer">
                    <div className="p-6 bg-white rounded-xl">
                      <span className="text-red-500 justify-content-center flex">
                        <img className=" w-8 h-8 text-center" src={event}></img>

                        <p className="mb-2 text-3xl ml-4 font-bold text-red-600 ">
                          2000
                        </p>
                      </span>
                      <h2 className="text-md text-red-600 ">Events</h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6 hover:scale-105 duration-500 cursor-pointer">
                    <div className="p-6 bg-white rounded-xl">
                      <span className="text-red-500 justify-content-center flex">
                        <img className=" w-8 h-8 text-center" src={thumb}></img>

                        <p className="mb-2 ml-8 text-3xl font-bold text-red-600 ">
                          10
                        </p>
                      </span>
                      <h2 className="text-md text-red-600 ">Pakages</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-12  py-12 mb-10 lg:w-1/2 lg:mb-0 rounded-2xl border-4 border-white">
              <img
                src={s4}
                alt=""
                className="relative z-40 object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
