
const cookies_generate = (req, res) => {

  const twoDaysInMilliSeconds = 2 * 24 * 60 * 60 * 1000;
  res.cookie('my-color-preference', 'blue');
  res.cookie('username', 'test-user-1');
  res.cookie('cookie-with-expiry-date', '100', {
    maxAge: twoDaysInMilliSeconds
  });

  res.status(200).json({
    message: 'Demo for Cookies. Check in the Browser -> Settings for Cookies'
  })
}


const cookies_list = (req, res) => {

  const cookies = req.cookies;

  res.status(200).json({
    message: "Cookies taken from the request object",
    cookies: cookies
  })

}

const {Router} = require("express");

const cookiesRouter = Router();

cookiesRouter.get("/demo/cookies-generate", cookies_generate);
cookiesRouter.get("/demo/cookies-lister", cookies_list);


module.exports = cookiesRouter;
