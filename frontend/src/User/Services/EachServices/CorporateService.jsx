import React from 'react'
import CommanTemplate from '../../Components/ServiceComponents/EachServiceComponents/CommanTemplate'
import backdrop from "../../../Assets/backdrops/1.jpg";

const CorporateService = () => {

    const subservices = [
        {
          service: "Conference Setup",
          ref: "/gallery/ballon",
        },
        {
          service: "Theme Conference and Meeting",
          ref: "/galler/dress",
        },
        { service: "Product Launch Events", ref: "/gallery/party" },
        {
          service: "LCD Projectors/Screens/Live Webcasting  ",
          ref: "/gallery/candle",
        },
        { service: "Stage / Professional Backdrop", ref: "/gallery/candle" },
        {
          service: "Sound Systems & Lightings Exibitions & Seminars",
          ref: "/gallery/candle",
        },
        { service: "Award Nights", ref: "/gallery/candle" },
        { service: "MCs/Comperes/Anchors", ref: "/gallery/candle" },
        {
          service: "Photography ...",
          ref: "/gallery/candle",
        },
      ];
  return (
    <div className="overflow-x-hidden">
      <CommanTemplate
        serviceArray={subservices}
        backdropImg={backdrop}
        backdropHeading="Coporate Events"
      />
    </div>
  )
}

export default CorporateService