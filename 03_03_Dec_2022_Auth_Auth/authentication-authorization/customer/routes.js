
const {customers, projects, public_data} = require("./controller");
const {authenticationCheck} = require("../authentication/controllers");

const {Router} = require("express");

const customerRouter = Router();


customerRouter.get("/customers", authenticationCheck, customers);
customerRouter.get("/projects", authenticationCheck, projects);
customerRouter.get("/public-data", public_data);


module.exports = customerRouter;