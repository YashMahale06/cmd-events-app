const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const recentSchema = new mongoose.Schema({
  recent_events: [
    {
      images: [
        {
          type: String,
        },
      ],
      video: {
        type: String,
      },
      event_name: {
        type: String,
      },
      event_date: {
        type: String,
      },
    },
  ],
});

const Recent = mongoose.model("Recent", recentSchema);

module.exports = Recent;
