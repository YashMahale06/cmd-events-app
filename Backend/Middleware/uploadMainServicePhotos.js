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

const uploadFolderPhotos = multer({
    storage: multerS3({
      s3: s3,
      bucket: "eventphotosbucket",
      key: function (req, file, cb) {
        const folder = req.params.folder;
        cb(null, `${folder}/${Date.now().toString()}_${file.originalname}`);
      },
    }),
  });

  module.exports = uploadFolderPhotos;