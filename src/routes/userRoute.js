const express = require("express");
const {
  getAllUser,
  loginWithEmail,
  getUserByEmail,
  updateUserTagsShow,
} = require("../controllers/userController");

const router = express.Router();

router.get("", getAllUser);
router.post("/email-login", loginWithEmail);
router.put("/u/:id", updateUserTagsShow);
router.get("/:email", getUserByEmail);

module.exports = router;
