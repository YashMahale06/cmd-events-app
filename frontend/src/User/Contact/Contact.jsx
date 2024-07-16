import React,{useState} from "react";
import Navbar from "../Components/Navbar/Navbar";
import axios from "axios";
import backdrop from "../../Assets/backdrops/6.jpg";
import phone from "../../Assets/contact_icons/phone.png";
import location from "../../Assets/contact_icons/location.png";
import insta from "../../Assets/contact_icons/insta.png";
import email from "../../Assets/contact_icons/email.png";
import Footer from "../Components/Footer/Footer";
import { API_URL } from "../../config/apiConfig";
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/api/contactmail`, formData);
      alert("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Please try again later.");
    }
  };
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <section>
        <div className=" mx-auto ">
          <div className=" h-[600px] relative">
            <div className="absolute left-0 w-full h-[600px] bg-black/80 text-gray-200 flex flex-col justify-center">
              <h1 className="!px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold justify-center text-center mb-8">
                Contact <span className="text-red-500">Us</span>
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
      <div>
        <div class="w-screen bg-[#ffffff] shadow-xl shadow-indigo-200 py-10 px-2 lg:px-20 flex flex-col justify-between items-center">
          <div class="container grid lg:grid-cols-2 grid-cols-1 gap-4 my-4 px-2 lg:px-12">
            <div class="w-full p-4 my-4 md:px-12 col-span-1 mr-auto bg-white rounded-2xl shadow-2xl">
              <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <input
                  class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  name="phone"
                  placeholder="Phone*"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div class="my-4">
                <textarea
                  name="message"
                  placeholder="Message*"
                  value={formData.message}
                  onChange={handleChange}
                  class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div class="my-2 w-1/2 ">
                <button
                  class="uppercase text-sm font-bold tracking-wide bg-red-600 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
                      type="submit"
                      onClick={handleSubmit}
                >
                  Send Message
                </button>
              </div>
            </div>

            <div class="w-full col-span-1 text-gray-600 font-medium text-xl px-2 lg:px-8 mt-8 lg:mt-0  ml-auto">
              <div class="flex flex-col ">
                <section>
                  <div className="p-4 lg:p-12 w-full h-full bg-[#F8F4EC] border-4 border-white rounded-lg">
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:gap-4 gap-2">
                      {/* First Icon */}
                      <div className="flex col-span-1 flex-col items-center">
                        <img className="w-12 h-12" src={phone}></img>

                        <h1 className="text-lg lg:text-2xl font-semibold text-gray-400 mt-4 lg:mt-8">
                          Phone
                        </h1>

                        <ul className="mt-2">
                          <li className="m-2 text-sm text-left text-gray-600">
                            <a href="#">9092093949</a>
                          </li>
                        </ul>
                      </div>

                      {/* Second Icon */}
                      <div className="flex flex-col items-center">
                        <img className="w-12 h-12 " src={email}></img>
                        <h1 className="text-lg lg:text-2xl font-semibold text-gray-400 mt-4 lg:mt-8">
                          Email
                        </h1>

                        <ul className="mt-2">
                          <li className="m-2 text-sm text-center text-gray-600">
                            <a href="#">cmdevents@gmail.com</a>
                          </li>
                        </ul>
                      </div>

                      {/* Third Icon */}
                      <div className="flex flex-col items-center">
                        <img className="w-12 h-12 " src={insta}></img>
                        <h1 className="text-lg lg:text-2xl font-semibold text-gray-400 mt-4 lg:mt-8">
                          Instagram
                        </h1>

                        <ul className="mt-2">
                          <li className="m-2 text-sm text-left text-gray-600">
                            <a href="#">cmd@events</a>
                          </li>
                        </ul>
                      </div>

                      {/* Fourth Icon */}
                      <div className="flex flex-col items-center">
                        <img className="w-12 h-12 " src={location}></img>
                        <h1 className="text-lg lg:text-2xl font-semibold text-gray-400 mt-4 lg:mt-8">
                          Location
                        </h1>
                        <ul className="mt-2">
                          <li className="m-2 text-sm text-left text-gray-600">
                            <a href="#">Cidco ambad</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
