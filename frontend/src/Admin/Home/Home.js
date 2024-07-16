import img from "../../Assets/back.jpg";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
const Home = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
      useEffect(() => {
          const checkisLoggedIn = () => {
            const token = localStorage.getItem("token");
            if (!token) {
              setIsLoggedIn(false);
              navigate("/admin/login");
            }
            setIsLoggedIn(true);
          };
          checkisLoggedIn();
    }, [isLoggedIn, navigate]);
  return (
    <div>
      <Navbar />
      <section>
        <div className=" mx-auto ">
          <div className=" h-screen relative">
            <div className="absolute left-0 w-full h-screen bg-black/80 text-gray-200 flex flex-col justify-center">
              <h1 className="!px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold justify-left text-left mb-8 ml-8">
                Hello <span className="text-orange-500">Admin !!!</span>
              </h1>
              <h1 className="!px-4 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold  ml-8 text-left mb-8">
                {" "}
                <span className="text-orange-500 "> </span>
                To Add Photos in the Database{" "}
              </h1>
              <a href="/admin/service-images" className="text-left ml-8">
                <button
                  type="button"
                  class="text-white w-40 ml-4 bg-transperent-600 border-4 border-white hover:bg-red-600 font-lg rounded-lg text-md px-4 py-2 text-center"
                >
                  Add Images
                </button>
              </a>
            </div>
            <img className="w-full h-screen object-cover" src={img} alt="#" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
