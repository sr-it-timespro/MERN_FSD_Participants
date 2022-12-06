const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();


// Middle-ware
app.use(express.json());

const PORT = config.get("server.port");

const authenticationRouter = require("./authentication/routes");

app.use(authenticationRouter);

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
