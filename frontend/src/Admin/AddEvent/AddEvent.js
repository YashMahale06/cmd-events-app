import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import img from "../../Assets/backdrops/6.jpg";
import axios from "axios";
import { API_URL } from "../../config/apiConfig";
export default function AddEvent() {
  const [eventData, setEventData] = useState({
    event_name: "",
    event_date: "",
    images: [],
    video: null,
  });
  const [loading, setLoading] = useState(false);

  const handlePhotoChange = (e) => {
    if(e.target.files.length > 4)
    {
      alert("You can only upload 4 images");
      e.target.value = "";
      setEventData({ ...eventData , images : []});
    }
    const files = Array.from(e.target.files);

    setEventData({ ...eventData, images: files });
  };

  const handleVideoChange = (e) => {
    if(e.target.files.length > 1){
      alert("You can only upload 1 video");
      e.target.value = "";
      setEventData({ ...eventData,video : null});
    }
    const file = e.target.files[0];
    setEventData({ ...eventData, video: file });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("event_name", eventData.event_name);
    formData.append("event_date", eventData.event_date);
    for (let i = 0; i < eventData.images.length; i++) {
      formData.append("images", eventData.images[i]);
    }
    formData.append("video", eventData.video);
    console.log(formData);
    const url = "http://localhost:5000/api/upload-recent-event";
    try {
      const response = await axios.post(
        `${API_URL}/api/upload-recent-event`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if(response){
        alert("Recent Event Added Successfully");
        e.target.reset();
        setEventData({event_name:"",event_date:"",images:[],video:""});

      }
      console.log("Form submitted:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
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
                  <h2 className="text-2xl mb-4 text-red-500">
                    Add Recent Events
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Event Name
                      </label>
                      <input
                        type="text"
                        name="event_name"
                        className="border rounded-md border-red-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter Event Name"
                        value={eventData.event_name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Event Date
                      </label>
                      <input
                        type="date"
                        name="event_date"
                        className="border rounded-md border-red-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={eventData.event_date}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Upload Photos (up to 4)
                      </label>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        className="border rounded-md border-red-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handlePhotoChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2">
                        Upload Video
                      </label>
                      <input
                        type="file"
                        accept="video/*"
                        className="border rounded-md border-red-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleVideoChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      {loading ? "Uploading...." : "Submit"}
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
}
