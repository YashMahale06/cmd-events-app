import { useParams } from "react-router-dom";

import React, { useState, useEffect } from "react";
import backdrop from "../../../../Assets/backdrops/4.jpg";
import Footer from "../../../Components/Footer/Footer";
import prev from "../../../../Assets/Arrows/prev.png";
import next from "../../../../Assets/Arrows/next.png";
import Navbar from "../../../Components/Navbar/Navbar";
import axios from "axios";
export default function ServiceGallery({
  particularservice,
  setparticularservice,
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { mainservice, subservice } = useParams();
  const [arrayImages, setArrayImages] = useState([]);

  const formatSubservice = (subservice) => {
    return subservice
      .split("_") // Split the string by underscore
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter and lowercase the rest
      .join(" "); // Join the words with space
  };

  // Convert subservice to desired format
  const formattedSubservice = formatSubservice(subservice);

  console.log(formattedSubservice);

  const images = [];

  const openFullScreenImage = (image, index) => {
    setSelectedImage(image);
    console.log(index);
    setSelectedIndex(index);
  };

  const closeFullScreenImage = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    let newIndex = selectedIndex;
    if (direction === "next") {
      newIndex = (selectedIndex + 1) % arrayImages.length;
    } else if (direction === "prev") {
      newIndex = (selectedIndex - 1 + +arrayImages.length) % arrayImages.length;
    }
    console.log(newIndex);
    setSelectedIndex(newIndex);
    setSelectedImage(arrayImages[newIndex]);
  };

  console.log(mainservice);
  console.log(subservice);

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/get-images/${mainservice}/${subservice}`
      );

      console.log(response.data);
      // setArrayImages(response.data);
      const data = await response.data;
      console.log(data);

      if (!data || data.length === 0) {
        throw new Error("No images found for this category");
      }
      if (!response) {
        throw new Error("Error fetching images");
      }
      setArrayImages(data);
    } catch (error) {
      console.error("Error fetching images:", error.message);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div>
      <Navbar />
      <section>
        <div className=" mx-auto ">
          <div className=" h-[300px] relative">
            <div className="absolute left-0 w-full h-[300px] bg-black/80 text-gray-200 flex flex-col justify-center">
              <h1 className="!px-4 text-2xl md:text-2xl lg:text-4xl font-bold justify-center text-center mb-4 mt-8">
                ⭐ {formattedSubservice}⭐
                <span className="text-orange-500"></span>
              </h1>
              <h1 className="!px-4 text-md sm:text-xl md:text-xl lg:text-2xl font-bold  lg:ml-40 lg:mr-40 text-center">
                {" "}
                <span className="text-orange-500 "> </span>
                We are skillfull team with a vast experience and capturing
                milestones for you , memories that will vividly stay with you
                forever.
              </h1>
            </div>
            <img
              className="w-full h-[300px] object-cover"
              src={backdrop}
              alt="#"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="bg-white  h-full py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
              {arrayImages.map((img, index) => (
                <div className="bg-white border-2 border-gray-200 shadow-2xl pt-4 pl-2 pr-2 pb-4  text-left rounded-md hover:scale-105 duration-500 cursor-pointer">
                  <a
                    key={index}
                    className="group col-span-1 items-end overflow-hidden "
                    onClick={() => openFullScreenImage(img, index)}
                  >
                    <img
                      src={img}
                      className="lg:w-[400px] lg:h-60 md:w-[500px] md:h-80 w-60 h-40 "
                    />
                  </a>
                </div>
              ))}
            </div>

            {selectedImage && (
              <div className="fixed inset-0 flex items-center justify-center lg:mt-16 bg-black bg-opacity-75">
                <div className="w-full absolute lg:h-[660px] h-80">
                  <img
                    src={selectedImage}
                    alt="Full Screen Image"
                    className="w-full overlay h-full"
                  />
                  <button
                    className="absolute top-1/2 left-10 text-white"
                    onClick={() => navigateImage("prev")}
                  >
                    <img src={prev} />
                  </button>
                  <button
                    className="absolute top-1/2 right-10 text-white"
                    onClick={() => navigateImage("next")}
                  >
                    <img src={next} />
                  </button>
                </div>
                <button
                  className="absolute top-36 lg:top-16 font-bold right-4 p-4 text-white"
                  onClick={closeFullScreenImage}
                >
                  ❌
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
