import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import prev from "../../../../Assets/Arrows/prev.png";
import next from "../../../../Assets/Arrows/next.png";
import { API_URL } from "../../../../config/apiConfig";
export default function MainService() {
  const [arrayImages, setArrayImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { mainservice } = useParams();
  console.log({ mainservice });

  const images = [];

  console.log("Params:", useParams());
  console.log("Mainservice:", mainservice);

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

  const fetchImages = async () => {
    try {
      const response = await fetch(
        `${API_URL}/api/get-images/${mainservice}`
      );

      console.log(response);
      if (!response.ok) {
        throw new Error("Error fetching images");
      }
      const data = await response.json();
      setArrayImages(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <div className="overflow-x-hidden">
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
    </div>
  );
}
