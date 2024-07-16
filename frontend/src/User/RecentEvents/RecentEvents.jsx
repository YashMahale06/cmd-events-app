import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";

import axios from "axios";
// import t4 from "../../../Assets/t4.mp4";

const VideoCard = ({ videoUrl }) => {
  return (
    <div className="bg-white p-4 shadow-md h-[428px] w-full flex flex-col">
      <div className="">
        <video controls className="w-full h-full">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

const ImageCard = ({ imageUrl }) => {
  return (
    <div className="bg-white p-4 shadow-md w-full h-[214px]">
      <img src={imageUrl} alt="card" className="w-full h-full" />
    </div>
  );
};

const RecentEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/get-recent-events"
        );
        console.log(response.data);
        setEvents(response.data.recent_events);
        console.log(events);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);
  return (
    <div className="bg-[#F8F4EC]">
      {/* Full width heading rectangle */}
      <Navbar />
      <div className="mt-24">
      {events.map((event,index) => {
        console.log("hello event");
        console.log(event);
        return (
          <div className="">
            <div className="bg-red-500 py-8 text-white flex justify-between items-center">
              <h1 className="text-4xl font-bold ml-8">🌟 {event.event_name}</h1>
              <p className="mr-8">{event.event_date}</p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 gap-4 p-4">
              {/* Video Card */}
              <div className="col-span-1 flex w-full">
                <VideoCard videoUrl={event.video}/>
              </div>

              {/* Image Cards */}
              <div className="col-span-1 grid grid-cols-2 gap-4">
                {event.images.map((img,index) => {
                 return (
                    <div>
                    <ImageCard imageUrl={img} />
                    </div>
                  )
                })}
                
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </div> 
  );
};

export default RecentEvents;
