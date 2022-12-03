const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  username: {
    type: String,
    required: [true, "Please supply username"],
    unique: true
  },

  password: {
    type: String,
    required: [true, "Please supply password"],
    minlength: [6, "Password should be atleast 6 characters"]
  }
})

const User = mongoose.model("user", userSchema);

module.exports = User;