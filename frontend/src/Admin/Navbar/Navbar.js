import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.png";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
      };
      const toggleDropdown = () => {
        setOpen((prevIsOpen) => !prevIsOpen);
      };
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
      <nav class="bg-transperent border-gray-200 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/admin/homepage"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className=" h-12 " />

            <span class="self-center text-2xl font-bold whitespace-nowrap text-red-600">
              CMD Events
            </span>
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              class="text-white bg-red-600  font-md font-bold rounded-lg  px-4 py-2 text-center"
              onClick={handleLogout}
            >
              Logout
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-cta"
              aria-expanded={isOpen}
              onClick={toggleDropdown}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
              <li>
                <a
                  href="/admin/homepage"
                  className="block py-2 px-3 md:p-0 text-black font-semibold rounded md:bg-transparent "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/admin/service-images"
                  className="block py-2 px-3 md:p-0 text-black font-semibold rounded md:bg-transparent "
                  aria-current="page"
                >
                  Upload Images
                </a>
              </li>
              <li>
                <a
                  href="/admin/addevent"
                  className="block py-2 px-3 md:p-0 text-black rounded font-semibold md:bg-transparent "
                >
                  Add Event
                </a>
              </li>
              <li>
                <a
                  href="/admin/addvideo"
                  className="block py-2 px-3 md:p-0 text-black rounded font-semibold md:bg-transparent "
                >
                  Add Video
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
