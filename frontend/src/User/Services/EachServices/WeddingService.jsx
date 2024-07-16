import React from 'react'
import CommanTemplate from '../../Components/ServiceComponents/EachServiceComponents/CommanTemplate';
import backdrop from "../../../Assets/backdrops/1.jpg";

const WeddingService = () => {

    const subservices = [
        {
          service: "Stage Decor",
          ref: "/gallery/wedding/stage_decor",
          ServiceName: "stagedecor",
        },
        {
          service: "Vidhi Mandap",
          ref: "/gallery/wedding/vidhi_mandap",
          ServiceName: "vidhimandap",
        },
        {
          service: "Haldi Decor",
          ref: "/gallery/wedding/haldi_decor",
          ServiceName: "haldidecor",
        },
        {
          service: "Sangeet Setup",
          ref: "/gallery/wedding/sangeet",
          ServiceName: "sangeet",
        },
        {
          service: "Mehendi Decor",
          ref: "/gallery/wedding/mehendi",
          ServiceName: "mehendi",
        },
        {
          service: "Live Musical & Sound System",
          ref: "/gallery/wedding/music+and_sound",
          ServiceName: "musicsound",
        },
        {
          service: "Lighting Arrangements",
          ref: "/gallery/wedding/lightings",
          ServiceName: "lightings",
        },
        {
          service: "Generator Setups",
          ref: "/gallery/wedding/generators",
          ServiceName: "generators",
        },
        {
          service: "After Party planning",
          ref: "/gallery/wedding/after_party",
          ServiceName: "afterparty",
        },
        {
          service: "Car Decoration",
          ref: "/gallery/wedding/car_decoration",
          ServiceName: "cardeco",
        },
        {
          service: "Live Screen",
          ref: "/gallery/wedding/live_screen",
          ServiceName: "livescreen",
        },
      ];
  return (
    <div className="overflow-x-hidden">
      <CommanTemplate
        serviceArray={subservices}
        backdropImg={backdrop}
        backdropHeading="Wedding"
      />
    </div>
  )
}

export default WeddingService