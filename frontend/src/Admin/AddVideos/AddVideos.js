import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import img from "../../Assets/backdrops/6.jpg";
import axios from "axios";
import { API_URL } from "../../config/apiConfig";

const AddVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files.length > 4) {
      alert("You can only upload 4 videos at a time");
      e.target.value = "";
      setVideos([]);
    } else {
      setVideos(e.target.files);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    for (let i = 0; i < videos.length; i++) {
      formData.append("videos", videos[i]);
    }
    try {
      const response = await axios.post(
        `${API_URL}/api/postvideos`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response) {
        alert("Videos Uploaded Successfully");
        e.target.reset();
        setVideos([]);
      }
    } catch (err) {
      console.error("Error uploading videos", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <section>
        <div className=" mx-auto ">
          <div className=" h-screen relative">
            <div className="absolute left-0 w-full h-screen bg-black/80 text-gray-200 flex flex-col justify-center">
              <div className="m-40">
                <div className="w-full max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8 mt-8">
                  <h2 className="text-2xl mb-4 text-red-500">Add Videos</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Upload Video
                      </label>
                      <input
                        type="file"
                        accept="video/*"
                        className="border rounded-md border-red-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleFileChange}
                        multiple
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      {loading ? "Uploading....." : "Submit"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <img className="w-full h-screen object-cover" src={img} alt="#" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddVideos;
