const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");


const app = express();

// Middle-ware
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());

const PORT = config.get("server.port");

const authenticationRouter = require("./authentication/routes");
app.use(authenticationRouter);

const cookiesRouter = require("./demo/cookies");
app.use(cookiesRouter);

const customerRouter = require("./customer/routes");
app.use(customerRouter);

// app.get("*", )

app.listen(PORT, () => {

  console.log(`Server application started and listening at port ${PORT}`);
});

const MONGOOSE_URI = config.get("MONGO_DB_URI");
mongoose.connect(MONGOOSE_URI, {

}).then((result) => {

  console.log('Database connection established...')
}).catch((error) => {

  console.log('Unable to establish database connection ->' + error);
}) 
