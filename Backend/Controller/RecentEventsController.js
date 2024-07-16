const Recent = require("../Models/RecentEventsSchema");

const PostRecentEvents = async(req,res) =>{
    try {
        const { event_name, event_date } = req.body;
        console.log(req.body);
  
        if (!req.files || !req.files.images || !req.files.video) {
          return res.status(400).json({ message: 'No files uploaded' });
        }
        console.log(req.files.imageUrls);
        const images = req.files.images.map((file) => file.location);
        const video = req.files.video[0].location;
  
        const recentEvent = {
          images : images,
          video : video,
          event_name:event_name,
          event_date:event_date,
        };
  
  
        console.log("Recent Event Data: ", recentEvent);
  
      // Save the recent event to MongoDB
      const recent = await Recent.findOne({});
      if (!recent) {
        // If the document doesn't exist, create a new one
        const newRecent = new Recent({
          recent_events: [recentEvent],
        });
        await newRecent.save();
      } else {
        // If the document exists, push the new event to the recent_events array
        recent.recent_events.push(recentEvent);
        await recent.save();
      }
        // Save data to MongoDB
        // const recentEvent = new Recent({
        //   recent_events: [
        //     {
        //       images: images,
        //       video: video,
        //       event_name: event_name,
        //       event_date: event_date,
        //     },
        //   ],
        // });
  
        // console.log(recentEvent);
        // await Recent.updateOne({}, { $push: { recent_events: recentEvent } }, { upsert: true });
  
        res.status(201).json({ message: "Event added successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to add event", error });
      }

}

const GetRecentEvents = async(req,res) =>{
    try {
        const recent = await Recent.findOne({});
        if (!recent) {
          return res.status(404).json({ message: 'No recent events found' });
        }
        res.status(200).json(recent);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch recent events', error });
      }

}


module.exports = {PostRecentEvents,GetRecentEvents}