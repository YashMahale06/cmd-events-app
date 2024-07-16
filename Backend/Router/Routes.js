const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
// const Admin = require("../Models/AdminSchema");
const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid");

const multer = require("multer");
const {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand, DeleteObjectCommand
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const multerS3 = require("multer-s3");

const jwt = require("jsonwebtoken");
const cors = require("cors");
const fs = require("fs");
const ffmpeg = require('fluent-ffmpeg');
const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const streamifier = require('streamifier');

const uploadVideos = require('../Middleware/uploadVideos');

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

require("dotenv").config();

// const { Authenticate } = require("../Middleware/auth");

// const uploadController = require("../Controller/UploadController");
const AWS = require("aws-sdk");
const { AuthController } = require("../Controller/AuthController");
const { PostVideoController, GetVideoController } = require("../Controller/VideoController");
const GalleryController = require("../Controller/GalleryController");
const { PostSubService, GetSubService, PostMainService, GetMainService } = require("../Controller/ServiceController");
const uploadPhotos = require("../Middleware/uploadPhotos");
const uploadFolderPhotos = require("../Middleware/uploadMainServicePhotos");
const uploadRecent = require("../Middleware/uploadRecent");
const { PostRecentEvents, GetRecentEvents } = require("../Controller/RecentEventsController");
const EmailController = require("../Controller/EmailController");
// const { AuthController } = require("../Controller/AuthController");
// const Upload = require("../Models/uploadSchema");
// const Video = require("../Models/videoSchema");
// const Wedding = require("../Models/weddinSchema");
// const Recent = require("../Models/recentSchema");

// const s3 = new AWS.S3();
router.use(express.json());
// const allowedOrigins = ["http://192.168.1.4:5000"];

// router.use(cors());

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

router.get('/',(req,res) =>{
  res.send("Hello World");
});


router.post("/api/login",AuthController);

router.post("/api/service-images");


// Home Page videos Routes 

router.get("/api/get-videos",GetVideoController);
router.post("/api/postvideos",uploadVideos.array("videos", 4),PostVideoController);


// Service main And subservice Routes
router.post("/api/upload-images/:folder/:subfolder",uploadPhotos.array("images", 10),PostSubService);
router.get("/api/get-images/:folder/:subfolder",GetSubService);


// Service mainService Routes
router.post("/api/upload-images/:folder",uploadFolderPhotos.array("images", 10),PostMainService);
router.get("/api/get-images/:folder",GetMainService);


// Recent Events Routes
router.post("/api/upload-recent-event",uploadRecent.fields([
  { name: "images", maxCount: 4 },
  { name: "video", maxCount: 1 }
]),PostRecentEvents);

router.get("/api/get-recent-events",GetRecentEvents);



router.post("/api/contactmail",EmailController);



// router.post("/api/services/upload-images")

router.get("/api/gallery/:filter",GalleryController)

module.exports = router;