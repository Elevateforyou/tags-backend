const User = require("../models/User");

require("dotenv").config();

const getAllUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      message: "User get successfully",
      data: user,
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const user = await User.findOne({ email });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUserTagsShow = async (req, res) => {
  try {
    const { id } = req.params;
    const { tagsShow } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { tagsShow },
      { new: true }
    );

    if (updatedUser) {
      res.status(200).json({
        message: "User tagsShow updated successfully",
        data: updatedUser,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginWithEmail = async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    // const user = {
    //   name,
    //   email,
    //   password,
    //   phone,
    // };
    const existingUser = await User.findOne({ email });

    // Check if password matches
    if (existingUser && existingUser.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    if (existingUser) {
      const u = {
        name: existingUser.name,
        email: existingUser.email,
        phone: existingUser.phone,
        tagsShow: existingUser?.tagsShow,
        uniqueCode: existingUser.uniqueCode,
      };
      if (existingUser?.tagsShow === true) {
        return res.status(200).json(u);
      } else {
        return res.status(201).json(u);
      }
    } else {
      return res.status(404).json({ message: "User not found" });
    }

    // const loginUser = await User.create(user);
    // console.log(loginUser);
    // res.status(201).json(loginUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  loginWithEmail,
  getUserByEmail,
  updateUserTagsShow,
  getAllUser,
};
