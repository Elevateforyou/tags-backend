const express = require("express");
const {
  taskSubmit,
  getTask,
  getTaskByEmail,
  getTaskById,
} = require("../controllers/tasksSubmissionController");

const router = express.Router();

// router.get("", getAllTagsAndTasks);
router.post("/submit", taskSubmit);
router.get("/task/:id", getTask);
router.get("/user/:email", getTaskByEmail);
router.get("/submit/:id", getTaskById);
router.get("/:email", getTaskByEmail);

module.exports = router;
