import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import backdrop from "../../Assets/backdrops/4.jpg";
import Footer from "../Components/Footer/Footer";
import prev from "../../Assets/Arrows/prev.png";
import next from "../../Assets/Arrows/next.png";
import axios from "axios";


export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [allPhotos, setAllPhotos] = useState([]);
  const [weddingPhotos, setWeddingPhotos] = useState([]);
  const [photosFetched, setPhotosFetched] = useState({
    all: false,
    wedding: false,
  });

  const [filter,setFilter] = useState("all");
  const [photos,setPhotos] = useState([]); 


  const openFullScreenImage = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeFullScreenImage = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    let newIndex = selectedIndex;
    if (direction === "next") {
      newIndex = selectedIndex + 1;
      if (newIndex >= photos.length) {
        setSelectedImage(null);
      }
    } else if (direction === "prev") {
      newIndex = selectedIndex - 1;
      if (newIndex <= photos.length) {
        setSelectedImage(null);
      }
    }

    openFullScreenImage(photos[newIndex], newIndex);
    setSelectedIndex(newIndex);
    setSelectedImage(photos[newIndex]);
  };

  const FilterButton = ({ category, selectedCategory, onClick }) => {
    return (
      <button
        className={`py-2 text-md col-span-1 rounded-2xl  ${
          category === selectedCategory
            ? "bg-red-500 text-white font-bold text-md"
            : "bg-white border-2 border-red-500 text-red-500 font-bold text-md"
        }`}
        onClick={onClick}
      >
        {category}
      </button>
    );
  };

  const fetchImages = async () => {
    try {
      
      const response = await axios.get(`http://localhost:5000/api/gallery/${selectedCategory}`);
      setAllPhotos(response.data);
      // setPhotosFetched((prev) => ({ ...prev, all: true }));
      console.log(response.data);

      setPhotos(response.data);
      if (!response) {
        throw new Error("Error fetching images");
      }
      // const data = await response.json();
      // setArrayImages(data);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    fetchImages();
  }, [selectedCategory]);


  return (
    <div>
      <Navbar />
      <section>
        <div className=" mx-auto ">
          <div className=" h-[600px] relative">
            <div className="absolute left-0 w-full h-[600px] bg-black/80 text-gray-200 flex flex-col justify-center">
              <h1 className="!px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold justify-center text-center mb-8">
                Gallery <span className="text-orange-500"></span>
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
              src={backdrop}
              alt="#"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="bg-white  h-full py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-4 sm:mb-8 md:mb-12">
              <div className="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-6 items-center justify-center gap-4">
                <FilterButton
                  category="All"
                  selectedCategory={selectedCategory}
                  onClick={() => setSelectedCategory("All")}
                />
                <FilterButton
                  category="Wedding"
                  selectedCategory={selectedCategory}
                  onClick={() => setSelectedCategory("Wedding")}
                />
                <FilterButton
                  category="Corporate"
                  selectedCategory={selectedCategory}
                  onClick={() => setSelectedCategory("Corporate")}
                />
                <FilterButton
                  category="Birthday_Party"
                  selectedCategory={selectedCategory}
                  onClick={() => setSelectedCategory("Birthday_Party")}
                />
                <FilterButton
                  category="Photography"
                  selectedCategory={selectedCategory}
                  onClick={() => setSelectedCategory("Photography")}
                />
                <FilterButton
                  category="Baby_Shower"
                  selectedCategory={selectedCategory}
                  onClick={() => setSelectedCategory("Baby_Shower")}
                />{" "}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
              {photos.map((img, index) => (
                <div className="bg-white border-2 border-gray-200 shadow-2xl pt-4 pl-2 pr-2 pb-4  text-left rounded-md">
                  <a
                    key={index}
                    href="#"
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
