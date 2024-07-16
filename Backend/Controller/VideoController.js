const Video = require("../Models/VideoSchema");

const {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");

require("dotenv").config();
const AWS = require("aws-sdk");

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const PostVideoController = async (req, res) => {
  try {
    console.log("Hello Post Controller");
    const videoUrls = req.files.map((file) => file.location);

    const existingVideos = await Video.findOne();
    if (existingVideos) {
      //   // Delete old videos from S3
      //   const deleteParams = {
      //     Bucket: "eventphotosbucket",
      //     Delete: {
      //       Objects: existingVideos.videos.map((video) => ({
      //         Key: video.split("/").slice(-2).join("/"),
      //       })),
      //       Quiet: false,
      //     },
      //   };
      //   await s3.deleteObjects(deleteParams).promise();

      //   // Delete old videos from MongoDB
      //   await Video.deleteOne();
      // }

      // Save new videos to MongoDB

      existingVideos.videos = videoUrls;
      await existingVideos.save();
    } else {
      const newVideo = new Video({ videos: videoUrls });
      await newVideo.save();
    }
    // const newVideo = new Video({ videos: videoUrls });
    // await newVideo.save();

    res.status(200).json({ message: "Videos uploaded and saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const GetVideoController = async (req, res) => {
  try {
    const videos = await Video.findOne().select("videos").exec();
    if (videos && videos.videos) {
      const firstFourVideos = videos.videos.slice(0, 4);
      res.status(200).json(firstFourVideos);
    } else {
      res.status(404).json({ message: "No videos found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching videos", error });
  }
};

module.exports = { PostVideoController, GetVideoController };
