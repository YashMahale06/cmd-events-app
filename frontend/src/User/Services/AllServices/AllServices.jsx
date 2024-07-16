import React from "react";
import backdrop from "../../../Assets/backdrops/1.jpg";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ServicesGrid from "../../Components/ServiceComponents/ServiceGrid";

const AllServices = () => {
  return (
    <div>
      <Navbar/>
      <section>
        <div className=" mx-auto ">
          <div className=" h-[600px] relative">
            <div className="absolute left-0 w-full h-[600px] bg-black/80 text-gray-200 flex flex-col justify-center">
              <h1 className="!px-4 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold justify-center text-center mb-8">
                Services <span className="text-orange-500"></span>
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
        <ServicesGrid/>
      </section>
      <Footer/>
    </div>
  );
};

export default AllServices;