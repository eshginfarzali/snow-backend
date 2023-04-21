import mongoose from "mongoose";
import User from "../models/User.js";

export const getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: "admin" }).select("-password");
    res.status(200).json(admins);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postAdmins = async (req, res) => {
  try {
    const newUser = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
};

export const getSuperAdmin = async (req, res) => {
  try {
    const superAdmin = await User.find({ role: "superadmin" }).select(
      "-password"
    );
    res.status(200).json(superAdmin);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
