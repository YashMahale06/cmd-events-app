import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import axios from "axios";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const VideoCarousal = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/get-videos"
        );
        setVideos(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError(err);
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  return (
    <section className="bg-[#ebe9e5] p-0 lg:12">
      <div className="mx-auto  mb-8 text-center pt-8">
        <span className="font-bold mb-8 block text-4xl text-black-800">
          Recent Videos
        </span>
      </div>
      <div className="parent">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={false}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
        >
          {videos.map((item, index) => {
            return (
              <div className="p-4 lg:p-12" key={index}>
                <video
                  width="320"
                  height="240"
                  controls
                  class="w-full rounded-lg shadow-2xl"
                >
                  <source src={item} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default VideoCarousal;
