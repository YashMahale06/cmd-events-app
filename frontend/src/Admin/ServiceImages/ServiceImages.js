import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../Assets/backdrops/6.jpg";
import Navbar from "../Navbar/Navbar";
import { API_URL } from "../../config/apiConfig";
const ServiceImages = () => {
  const [image, setImage] = useState([]);
  const [folder, setFolder] = useState("wedding");
  const [subFolder, setSubFolder] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const fileInputRef = useRef(null);


  const handleImageChange = (e) => {
    setImage(e.target.files);
  };

  const handleFolderChange = (e) => {
    setFolder(e.target.value);
    setSubFolder(""); // Reset subFolder when folder changes
  };

  const handleSubFolderChange = (e) => {
    setSubFolder(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData();
    for (let i = 0; i < image.length; i++) {
      formData.append("images", image[i]); // Use the correct field name "images"
    }
    const url = `${API_URL}/api/upload-images/${folder}/${subFolder}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      if (response) {
        const data = await response.json();
        alert("Service Images Added Successfully");
        
        setMessage(data.message);
        setFolder("wedding");
        setSubFolder("stage_decor");
        e.target.reset();
        setImage([]);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "Failed to upload images");
      }
    } catch (error) {
      console.error("Error:", error);

      setMessage("An error occurred while uploading the image.");
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
                <form
                  onSubmit={handleSubmit}
                  className="w-full  p-10 bg-white rounded-lg shadow-lg"
                >
                  <div className="">
                    <div>
                      <label
                        htmlFor="folder"
                        className="block text-lg font-medium text-black mb-2"
                      >
                        Choose a folder:
                      </label>
                      <select
                        id="folder"
                        value={folder}
                        onChange={handleFolderChange}
                        className="border-2 border-red-600 p-3 rounded-md w-full font-bold text-black "
                      >
                        <option value="wedding">Wedding</option>
                        <option value="babyshower">Baby Shower</option>
                        <option value="birthday">Birthday</option>
                        {/* Add more options as needed */}
                      </select>
                      {/* Add nested select for wedding folder */}
                      {folder === "wedding" && (
                        <div className="mt-4">
                          <label
                            htmlFor="subFolder"
                            className="block text-lg font-medium text-black mb-2"
                          >
                            Choose a subfolder:
                          </label>
                          <select
                            id="subFolder"
                            value={subFolder}
                            onChange={handleSubFolderChange}
                            className="border-2 border-red-600 font-bold text-black p-3 rounded-md w-full "
                          >
                            <option value="stage_decor">Stage</option>
                            <option value="backdrop">Backdrop</option>
                            <option value="vidhi_mandap">Vidhi Mandap</option>
                            <option value="haldi_decor">Haldi Decor</option>

                            {/* Add more subfolder options for wedding */}
                          </select>
                        </div>
                      )}
                    </div>
                    <label
                      class="block mb-2 text-lg mt-4 font-semibold text-gray-700"
                      for="file_input"
                    >
                      Upload file
                    </label>
                    <input
                      class="border-2 rounded-md border-red-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="file_input"
                      type="file"
                      onChange={handleImageChange}
                      accept="image/*"
                      multiple
                      ref={fileInputRef}
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-red-600 text-white px-6 py-3 rounded-md mt-4 "
                  >
                    {loading ? "Uploading..." : "Upload Images"}
                  </button>
                </form>
                {message && (
                  <div className="mt-4 text-center text-white">{message}</div>
                )}
              </div>
            </div>
            <img className="w-full h-screen object-cover" src={img} alt="#" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceImages;
