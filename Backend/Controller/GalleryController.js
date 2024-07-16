const Service = require("../Models/ServiceSchema");


const GalleryController = async (req,res) => {
    try {

        const {filter} = req.params;
        console.log(filter);
    
        const result = await Service.findOne({}, { _id: 0 });
        console.log(result);
        if (!result) {
          return res.status(404).json({ message: "No data found" });
        }
    
        let allLinks = [];
        const data = result.toObject();
        console.log(data);
    
        if(filter === 'All')
        {
          for (const folder in data) {
            for (const subfolder in data[folder]) {
              if (Array.isArray(data[folder][subfolder])) {
                allLinks = allLinks.concat(data[folder][subfolder].slice(0, 5));
              }
            }
          }
    
        } else if(filter === 'Wedding'){
          for (const sf in data.wedding) {
            if (Array.isArray(data.wedding[sf])) {
              allLinks = allLinks.concat(data.wedding[sf].slice(0, 5));
            }
          }
        } else if(filter === 'Corporate'){
          for (const sf in data.corporate) {
            if (Array.isArray(data.corporate[sf])) {
              allLinks = allLinks.concat(data.corporate[sf].slice(0, 5));
            }
          }
        } else if(filter === 'Baby_Shower'){
            if (Array.isArray(data.babyshower)) {
              allLinks = allLinks.concat(data.babyshower.slice(0, 5));
            }
          
        }else if(filter === 'Birthday_Party'){
            if (Array.isArray(data.birthday)) {
              allLinks = allLinks.concat(data.birthday.slice(0, 5));
            }
          
        }else if(filter === 'Photography'){
          for (const sf in data.photography) {
            if (Array.isArray(data.photography[sf])) {
              allLinks = allLinks.concat(data.photography[sf].slice(0, 5));
            }
          }
        }
    
        // add other filters below this 
        
    
        res.status(200).json(allLinks);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching image links", error });
      }

}

module.exports = GalleryController;