
const signupHandler = (req, res) => {

  console.log(req.body);

  const username = req.body.username;
  const password = req.body.password;

  console.log(`Username is ${username} and password is ${password}`);

  res.status(200).json({
    message: "Sign-up process implementation"
  })
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