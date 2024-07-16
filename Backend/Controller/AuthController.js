const express = require("express");
const jwt = require("jsonwebtoken");
const Admin = require("../Models/AdminSchema");
const bcrypt = require("bcryptjs");

const AuthController = async (req, res) => {
  const { username, password } = req.body;
  //   console.log(username);
  try {
    const admin = await Admin.findOne({ username });
    // console.log(admin);
    // console.log(admin.password);

    if (admin === null) {
      res.status(401).json({ message: "Invalid phone number or password" });
      return;
    }

    let passwordsMatch;

    if (admin.password == password) {
      passwordsMatch = true;
    } else {
      passwordsMatch = false;
    }
    if (!admin || !passwordsMatch) {
      res.status(401).json({ message: "Invalid phone number or password" });
      return;
    }

    const token = jwt.sign({ id: admin._id }, "your-secret-key", {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    console.log("Error in auth controller", error);
  }
};

module.exports = { AuthController };
