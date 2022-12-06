const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

userSchema.statics.findUser = async function(username, plainTextPassword){

  // First check by username
  const user = await User.findOne({username : username});
  console.log(`User is ${user}`);

  if (user){

    const hashedPassword = user.password;
    // 'testpassword_123', '#$(*#($#*_@_#_)#*@#@_#@#@#@'
    const passwordOutcome = await bcrypt.compare(plainTextPassword, hashedPassword);
    if (passwordOutcome){
      return user;
    }else{
      throw Error("Incorrect password - Check the password");  
    }
  }else{
    throw Error("Incorrect username - User not found");
  }

  // If username Existing,
    // Then check for password
    // If password is correct, then Success
    // If Password not correct, then Error 

  // If Not Exsting -> Error

}

userSchema.pre('save', async function(next) {

  const salt = await bcrypt.genSalt();

  const plainTextPassword = this.password;
  const hashedPassword = await bcrypt.hash(plainTextPassword, salt);

  this.password = hashedPassword;

  console.log("Hashed password is " + hashedPassword);

  console.log('Method/Hooked called before save...')
  // console.log("Meaning of this " + this);

  next();
})

userSchema.post('save', function(userDocument, next) {

  console.log('Method/Hook called after the save operation...')
  // console.log("Meaning of this " + this);
  // console.log("USer document " + userDocument);

  next();
})


const User = mongoose.model("user", userSchema);

module.exports = User;