const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const serviceSchema = new mongoose.Schema({
  wedding: {
    vidhi_mandap: [
      {
        type: String,
      },
    ],

    stage_decor: [
      {
        type: String,
      },
    ],
    haldi_decor: [
      {
        type: String,
      },
    ],
    sangeet_setup: [
      {
        type: String,
      },
    ],
  },
  birthday :[
    {
      type:String,
    }
  ],
  corporate : {
    stage:[
      {
        type:String,
      }
    ]
  },

  babyshower : [
    {
      type: String,
    }
  ]
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
