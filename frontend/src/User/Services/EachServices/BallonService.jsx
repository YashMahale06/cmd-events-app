import React from 'react'
import CommanTemplate from '../../Components/ServiceComponents/EachServiceComponents/CommanTemplate';
import backdrop from "../../../Assets/backdrops/1.jpg";

const BallonService = () => {
    const subservices = [
        {
          service: "Spectacular Party Balloon Decoraton",
          ref: "/gallery/ballon",
        },
        {
          service: "Mini Mouse Theme",
          ref: "/galler/dress",
        },
        { service: "Rooftop Pastel Party", ref: "/gallery/party" },
        { service: "BirthDay And Private Party Balloons", ref: "/gallery/candle" },
        { service: "Frozen Theme Party", ref: "/gallery/candle" },
        {
          service: "Corporate Balloon Styling and Gifting",
          ref: "/gallery/candle",
        },
        { service: "Baby Shower Ceremony", ref: "/gallery/candle" },
        { service: "Cartoon Theme", ref: "/gallery/candle" },
        {
          service: "Event's Inauguration ceremony...",
          ref: "/gallery/candle",
        },
      ];
  return (
    <div className="overflow-x-hidden">
      <CommanTemplate
        serviceArray={subservices}
        backdropImg={backdrop}
        backdropHeading="Ballon Services"
      />
    </div>
  )
}

export default BallonService