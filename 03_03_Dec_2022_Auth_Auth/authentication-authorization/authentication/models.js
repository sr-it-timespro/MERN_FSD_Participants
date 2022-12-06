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

userSchema.pre('save', function(next) {

  console.log('Method/Hooked called before save...')
  console.log("Meaning of this " + this);

  next();
})

userSchema.post('save', function(userDocument, next) {

  console.log('Method/Hook called after the save operation...')
  console.log("Meaning of this " + this);
  console.log("USer document " + userDocument);

  next();
})


const User = mongoose.model("user", userSchema);

module.exports = User;