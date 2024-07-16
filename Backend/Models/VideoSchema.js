const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const videoSchema = new mongoose.Schema({

    videos : [
        {
            type:String,
        }
    ]
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
