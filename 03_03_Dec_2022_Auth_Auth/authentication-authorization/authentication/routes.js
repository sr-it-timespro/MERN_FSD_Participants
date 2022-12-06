
const {Router} = require("express");
const {signupHandler, signinHandler, signoutHandler} =  require("./controllers");

const authenticationRouter =  Router();

authenticationRouter.post("/sign-up", signupHandler);
authenticationRouter.post("/sign-in", signinHandler);
authenticationRouter.get("/sign-out", signoutHandler);

module.exports = authenticationRouter;
