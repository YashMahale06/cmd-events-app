import React from "react";
import CommanTemplate from "../../Components/ServiceComponents/EachServiceComponents/CommanTemplate";
import backdrop from "../../../Assets/backdrops/1.jpg";

const SpecialEntriesService = () => {
  const subservices = [
    {
      service: "Heavenly entry with dry ice cloud effect",
      ref: "/gallery/ballon",
    },
    {
      service: "Grand Entry with cold fire and Paper Blast",
      ref: "/galler/dress",
    },
    { service: "Entry By Shehanai Group", ref: "/gallery/party" },
    { service: "Special Entry in Vintage Car", ref: "/gallery/candle" },
    { service: "Flower Booming Entry", ref: "/gallery/candle" },
    { service: "Sparkler Way Entry", ref: "/gallery/candle" },
    { service: " Buggy Rides Entry", ref: "/gallery/candle" },
    { service: "A Beauteous Zorb Ball Entry", ref: "/gallery/candle" },
    {
      service: "Wedding Bridal Entry Phoolon ki Chaader",
      ref: "/gallery/candle",
    },
    {
      service: "Wedding Bridal Entry in Traditional Doli",
      ref: "/gallery/candle",
    },
    { service: "Entry with Dance Group...", ref: "/gallery/candle" },
  ];
  return (
    <div className="overflow-x-hidden">
      <CommanTemplate
        serviceArray={subservices}
        backdropImg={backdrop}
        backdropHeading="Special Entries"
      />
    </div>
  );
};

export default SpecialEntriesService;
