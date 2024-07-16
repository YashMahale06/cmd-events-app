

const Service = require('../Models/ServiceSchema');
//  get and post mainservice and subservice 


const PostSubService = async(req,res) =>{

    try {
        const { folder, subfolder } = req.params;
    
        if (!req.files || req.files.length === 0) {
          return res.status(400).json({ message: "No images uploaded" });
        }
    
        const imageLinks = req.files.map(file => file.location);
    
        // Determine the field to update
        const updateField = `${folder}.${subfolder}`;
    
        // Construct the update object
        const update = { $push: {} };
        update.$push[updateField] = { $each: imageLinks };
    
        // Update the document
        const updatedWedding = await Service.findOneAndUpdate(
          {},
          update,
          { new: true, upsert: true }
        );
    
        res.status(201).json({ message: "Images uploaded successfully", updatedWedding });
      } catch (error) {
        console.error(error);
        if (error instanceof multer.MulterError) {
          // A Multer error occurred when uploading.
          res.status(400).json({ message: "Multer error occurred during image upload", error: error.message });
        } 
        // else if (error.code === 'LIMIT_FILE_SIZE') {
        //   // File size limit error
        //   res.status(400).json({ message: "File size is too large. Maximum allowed size is 5MB" });
        // }
         else if (error.message === 'Invalid file type, only images are allowed!') {
          // Invalid file type error
          res.status(400).json({ message: "Invalid file type, only images are allowed" });
        } else {
          // An unknown error occurred
          res.status(500).json({ message: "An unknown error occurred during image upload", error: error.message });
        }
        res.status(500).json({ message: "Error uploading images", error });
      }


}


const GetSubService = async(req,res)=>{
  try {
    const { folder, subfolder } = req.params;
    const queryField = `${folder}.${subfolder}`;
    const result = await Service.findOne({}, { [queryField]: 1, _id: 0 });
    console.log(result);
    console.log("hello");

    if (!result || !result[folder] || !result[folder][subfolder]) {
      return res.status(404).json({ message: "Folder or subfolder not found" });
    }
    if (result) {
      res.status(200).json(result[folder][subfolder] || []);
    } else {
      res.status(404).json({ message: "Folder or subfolder not found" });
    }
  } catch (error) {
    console.error('Error fetching image links:', error);
    res.status(500).json({ message: "Error fetching image links", error: error.message });
  }

}



// get and post only mainservice

const PostMainService = async(req,res) =>{
  try {
    const { folder } = req.params;
    const imageLinks = req.files.map(file => file.location);

    // Determine the field to update
    const updateField = `${folder}`;

    // Construct the update object
    const update = { $push: {} };
    update.$push[updateField] = { $each: imageLinks };

    // Update the document
    const updatedWedding = await Service.findOneAndUpdate(
      {},
      update,
      { new: true, upsert: true }
    );

    res.status(201).json({ message: "Images uploaded successfully", updatedWedding });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error uploading images", error });
  }

}

const GetMainService = async(req,res) =>{

  try {
    const { folder } = req.params;
    
    // if (folder !== "wedding") {
    //   return res.status(400).json({ message: "Invalid folder" });
    // }

    const queryField = `${folder}`;
    const result = await Service.findOne({}, { [queryField]: 1, _id: 0 });
    console.log(result);
    console.log("hello");

    if (result) {
      res.status(200).json(result[folder] || []);
    } else {
      res.status(404).json({ message: "Folder or subfolder not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching image links", error });
  }

}





module.exports = {PostSubService,GetSubService,PostMainService,GetMainService}