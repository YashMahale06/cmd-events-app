import React, { useState } from "react";
import logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_URL } from "../../config/apiConfig";
export const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();

  const handleLogin = async () => {
    // Send login request to backend
    const response = await fetch(`${API_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem('token', token); 
      alert("Login Successfull !!!")// Save token in localStorage // Update parent component state
      Navigate('/admin/home'); // Redirect to home page
    } else {
      console.error('Login failed');
      alert("Incorrect Password or Username");
    }
  };
  return (
    <div className="">
      <div class="container  mx-auto w-80 lg:w-[1000px] h-[400px] mt-40 flex bg-gray-100 rounded-lg shadow-xl overflow-hidden ">
        <div class="relative hidden xl:block xl:w-1/2 h-full">
          <img
            class="absolute h-auto w-full object-cover"
            src="https://images.unsplash.com/photo-1541233349642-6e425fe6190e"
            alt="my zomato"
          />
        </div>
        <div class="w-full xl:w-1/2 p-8">
          <form method="post" action="#" onSubmit="return false">
            <h1 class=" text-2xl font-bold">Login</h1>
            <div>
            </div>
            <div class="mb-4 mt-6">
              <label
                class="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="username"
                type="text"
                placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div class="mb-6 mt-6">
              <label
                class="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                class="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="password"
                type="password"
                placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
              />
             
            </div>
            <div class="flex w-full mt-8">
              <button
                class="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                type="button"
                onClick={handleLogin}
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
      </div>
  );
};
