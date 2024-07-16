const multer = require("multer");
const multerS3 = require("multer-s3");
require("dotenv").config();

const {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const uploadPhotos = multer({
  storage: multerS3({
    s3: s3,
    bucket: "eventphotosbucket",
    key: function (req, file, cb) {
      const folder = req.params.folder;
      const subfolder = req.params.subfolder;
      cb(
        null,
        `${folder}/${subfolder}/${Date.now().toString()}_${file.originalname}`
      );
    },
  }),
  fileFilter: (req, file, cb) => {
    // Accept image files only
    if (!file.mimetype.startsWith("image/")) {
      cb(new Error("Invalid file type, only images are allowed!"), false);
    } else {
      cb(null, true);
    }
  },
});


module.exports = uploadPhotos;