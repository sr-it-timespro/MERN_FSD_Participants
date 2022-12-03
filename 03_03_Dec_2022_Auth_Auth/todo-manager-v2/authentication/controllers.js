
const signupHandler = (req, res) => {

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