import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import Navbar from "../Components/Navbar/Navbar.js";
import About from "../Components/HomeComponents/About/About.js";
// import Footer from "../../../Components/Footer/Footer.jsx";

// import Connect from "../../../Components/Connect/Connect.js";
// import About from "../../../Components/About/About.js";
// import Testimonial from "../../../Components/Testimonial/Testimonial.js";
// import Service from "../../../Components/Services/Service.js";
// import Features from "../../../Components/Features/Features.js";
// import VideoCarousal from "../videoCarousal/VideoCarousal.js";
import Carousal from '../Components/HomeComponents/Carousal/Carousal.jsx';
import VideoCarousal from "../Components/HomeComponents/VideoCarousal/VideoCarousal.jsx";
import Services from "../Components/HomeComponents/Services/Services.js";
import Features from "../Components/HomeComponents/Features/Features.js";
import Testimonial from "../Components/HomeComponents/Testimonals/Testimonals.js";
import Connect from "../Components/HomeComponents/Connect/Connect.js";
import Footer from "../Components/Footer/Footer.js";

const Home = () => {
  // const { ref: aboutRef, inView: aboutInView } = useInView({
  //   threshold: 0.4, // Adjust threshold as needed
  // });
  // const { ref: videoRef, inView: videoInView } = useInView({
  //   threshold: 0.4,
  // });
  // const { ref: serviceRef, inView: serviceInView } = useInView({
  //   threshold: 0.4,
  // });
  // // Add more refs and inView variables for other sections as needed

  // const fadeInVariants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 2, transition: { duration: 2 } },
  // };

  // Add more refs and inView variables for other sections as needed

  return (
    <div className="overflow-x-hidden">
    <Navbar/>

    <Carousal/>

    <VideoCarousal/>

    <Services/>

    <About/>

    <Features/>

    <Testimonial/>


    <Connect/>

    <Footer/>



      {/*<Carousal />

      <VideoCarousal />


      <Service />

      <About />

      <Features />

      <Testimonial />

      <Connect />

      <Footer /> */}
    </div>
  );
};

export default Home;
