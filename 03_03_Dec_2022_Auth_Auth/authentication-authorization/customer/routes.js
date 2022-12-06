
const {customers} = require("./controller");

const {Router} = require("express");

const customerRouter = Router();


customerRouter.get("/customers", customers);

module.exports = customerRouter;