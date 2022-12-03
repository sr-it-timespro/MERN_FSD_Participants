const User = require("./models");

const signupHandler = async (req, res) => {

  console.log(req.body);

  const username = req.body.username;
  const password = req.body.password;

  console.log(`Username is ${username} and password is ${password}`);

  try{

    const newUser = await User.create({
      username, password
    });
    console.log(`New user is ${newUser}`);

    res.status(200).json({
      user: newUser
    })
  
  }catch(error){
    console.log(error);
    res.status(400).json({
      error: error.message
    })
  }

}

const signinHandler = (req, res) => {

  res.status(200).json({
    message: "Sign-in process implementation"
  })
}


const signoutHandler = (req, res) => {

  res.status(200).json({
    message: "Sign-out process implementation"
  })
}

module.exports = {signupHandler, signinHandler, signoutHandler};