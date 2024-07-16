import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import ServiceCard from "./ServiceCard";

const CommanTemplate = ({
  serviceArray,
  backdropImg,
  backdropHeading,
  buttonRef,
}) => {
  const ServiceArray = serviceArray;
  const [showCard, setShowCard] = useState("all");

  const handleProject = (category) => {
    setShowCard(category);
  };
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <section>
        <div className=" mx-auto ">
          <div className=" h-[600px] relative">
            <div className="absolute left-0 w-full h-[600px] bg-black/80 text-gray-200 flex flex-col justify-center">
              <h1 className="!px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold justify-center text-center text-red-500 mb-8">
                {backdropHeading}
                <span className="text-orange-500"></span>
              </h1>
              <h1 className="!px-4 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold  ml-8 text-center">
                {" "}
                <span className="text-orange-500 "> </span>
                To get started planning, please tell us a bit more about your
                event!{" "}
              </h1>
            </div>
            <img
              className="w-full h-[600px] object-cover"
              src={backdropImg}
              alt="#"
            />
          </div>
        </div>
      </section>
      <div className="p-8 w-full h-full bg-[#F8F4EC] text-left">
        <div className="mx-auto mt-8 mb-2 text-center">
          <span className="font-bold mb-8 block text-xl lg:text-3xl text-gray-800">
            Planning you're wedding, but no idea where to start? <br />
            <span className="text-red-400 hover:underline">CMD Events!</span>
          </span>
          <span className="font-normal block text:md lg:text-xl text-gray-600">
            Whether you need a day-of coordinator or full service planning from
            your proposal to your big day, we have you covered!{" "}
          </span>
        </div>
        <div className="mt-4 rounded-lg">
          <div className="flex flex-wrap mx-4">
            {ServiceArray.map((item, index) => (
              <ServiceCard
                key={index}
                title={item.service} // Use the item as the title for the card
                description="We capture memories for you" // Add a default description
                button="View Photos"
                buttonHref={item.ref}
                showCard={showCard}
              />
            ))}
          </div>
        </div>
      </div>

      <div class="">
        <div class="w-screen bg-gray-600 shadow-xl items-center justify-center shadow-indigo-200 py-10 px-20 flex flex-col justify-between items-center">
          <div class="container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-4 my-4  lg:px-12">
            <div class="w-full p-4 my-4 lg:px-12 col-span-1 mr-auto bg-white rounded-2xl shadow-2xl">
              <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="First Name*"
                />
                <input
                  class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Last Name*"
                />
                <input
                  class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Email*"
                />
                <input
                  class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  placeholder="Phone*"
                />
              </div>
              <div class="my-4">
                <textarea
                  placeholder="Message*"
                  class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div class="my-2 w-1/2 ">
                <button
                  class="uppercase text-sm font-bold tracking-wide bg-red-500 text-gray-100 p-2 rounded-lg lg:w-[200px] 
                        focus:outline-none focus:shadow-outline ml-12 lg:ml-0"
                >
                  Send Message
                </button>
              </div>
            </div>

            <div class="w-full col-span-1 text-white font-medium text-xl px-8 mt-8  ml-auto hidden lg:flex">
              <div class="flex flex-col ">
                <h1 class="font-bold uppercase text-2xl ">
                  Additional Services We Provide
                </h1>
                <div>
                  <ul className="mt-2">
                    <li className="m-2  text-left text-white">
                      ❤️<a href="#">Engagement Parties</a>
                    </li>
                    <li className="m-2 text-left text-white">
                      ❤️<a href="#">Bachelor / Bachelorette Parties</a>
                    </li>
                    <li className="m-2  text-left text-white">
                      ❤️<a href="#">Welcome Parties</a>
                    </li>
                    <li className="m-2  text-left text-white">
                      ❤️<a href="#">Rehearsal Dinners</a>
                    </li>
                  </ul>
                </div>
                <h1 class="font-medium  text-xl mt-8">
                  Can’t find the answers you need? Get in touch!
                </h1>
                <div class="my-2 w-1/2 ">
                  <button
                    class="uppercase text-sm font-bold tracking-wide bg-red-600 text-gray-100 p-3 rounded-lg w-full 
                        focus:outline-none focus:shadow-outline"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommanTemplate;
