const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  taskName: { type: String, required: true },
  taskDescription: { type: String, required: true },
  image: { type: String, required: true },
});

const TagsAndTaskSchema = new mongoose.Schema({
  class: { type: String, required: true },
  tags: [
    {
      TagName: { type: String, required: true },
      image: { type: String, required: true },
      values: [TaskSchema],
    },
  ],
});

const TagsAndTask = mongoose.model("TagsAndTask", TagsAndTaskSchema);

module.exports = TagsAndTask;
