const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: { type: String, optional: true },
  completedTask: { type: Number, default: 0 },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    optional: true,
    // unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  uniqueCode: { type: String, optional: true },
  tagsShow: { type: Boolean, default: true },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
