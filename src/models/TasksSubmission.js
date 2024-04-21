const mongoose = require("mongoose");

const TasksSubmissionSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true }, // Remove unique: true
  tag: { type: String },
  phone: { type: String },
  taskId: { type: String },
  text: { type: String, required: true },
  task: {
    taskName: { type: String },
    taskDescription: { type: String },
    taskId: { type: String },
    video: { type: String, required: true },
  },
  uniqueCode: { type: String },
  tagName: { type: String },
});

const TasksSubmission = mongoose.model(
  "TasksSubmission",
  TasksSubmissionSchema
);

module.exports = TasksSubmission;
