const User = require("./models");
const jwt = require("jsonwebtoken");

const SECRET_KEY = 'TIMES PRO';
const TWO_DAYS_IN_SECONDS = 2 * 24 * 60 * 60; 

const authenticationCheck = (req, res, next) => {

  const jwtToken = req.cookies.jwt;

  if (jwtToken){

    jwt.verify(jwtToken, SECRET_KEY, (error, decodedToken) => {

      if (error){

        console.log(error);
        console.log('JWT.sign operation failed...');
        res.redirect("/sign-in.html");
      }else{

        console.log('Decoded token ', decodedToken);
        next();
      }
    })

  }else{

    res.redirect("/sign-in.html");
  }

  //next();
}

const createJWTCookie = (userId) => {

    const token = jwt.sign({userId: userId}, SECRET_KEY, {
      expiresIn: TWO_DAYS_IN_SECONDS
    });

    console.log(`Token is ${token}`);
    return token;
}

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

    // Generate a cookie 
    const jwtCookie = createJWTCookie(username);
    res.cookie('jwt', jwtCookie, {
      maxAge: TWO_DAYS_IN_SECONDS * 1000 
    });

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

const signinHandler = async (req, res) => {

  console.log(req.body);

  const username = req.body.username;
  const password = req.body.password;

  console.log(`Username is ${username} and password is ${password}`);

  try{

    const existingUser = await User.findUser(
      username, password);

    // Generate a cookie 
    const jwtCookie = createJWTCookie(username);
    res.cookie('jwt', jwtCookie, {
      maxAge: TWO_DAYS_IN_SECONDS * 1000 
    });


    console.log(`Existing user is ${existingUser}`);

    res.status(200).json({
      user: existingUser
    })
  
  }catch(error){
    console.log(error);
    res.status(400).json({
      error: error.message
    })
  }

}


const signoutHandler = (req, res) => {

  res.cookie('jwt', '', {
    maxAge: 1
  })

  res.redirect("/sign-in.html");

}

module.exports = {signupHandler, signinHandler, signoutHandler, authenticationCheck};