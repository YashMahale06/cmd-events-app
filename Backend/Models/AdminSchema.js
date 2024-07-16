const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const adminSchema = new mongoose.Schema(
    {
        username:{
            type: String,
        },
        email:{
            type:String,
        },

        password:{
            type:String,
        }

});


adminSchema.pre("save", async function (next) {
    console.log("hii");
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 12);
    }
    next();
  });
  
  // token generation
  
  adminSchema.methods.generateAuthToken = async function (token) {
    try {
      let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
      this.tokens = this.tokens.concat({ token: token });
      await this.save();
      return token;
    } catch (err) {
      console.log(err);
    }
  };
  

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
