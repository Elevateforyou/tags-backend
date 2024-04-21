const TagsAndTask = require("../models/TagAndTask");
const User = require("../models/User");

require("dotenv").config();

const getTagAndTask = async (req, res) => {
  try {
    const { uniqueCode } = req.params;
    const tagAndTask = await TagsAndTask.findOne({ class: uniqueCode });
    res.status(200).json({
      message: "Tag And Task get successfully",
      data: tagAndTask,
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllTagsAndTasks = async (req, res) => {
  try {
    const user = await TagsAndTask.find();
    res.status(200).json({
      message: "Tags And Tasks get successfully",
      data: user,
    });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getTagAndTask,
  getAllTagsAndTasks,
};
