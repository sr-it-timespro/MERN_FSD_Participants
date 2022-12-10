

const jsonServer = require("json-server");
const config = require("./config");
const cors = require("cors")

const server = jsonServer.create();
const router = jsonServer.router("./todos-data.json");
const middleware =  jsonServer.defaults();

server.use(cors());
server.use(middleware);
server.use(router);

const PORT = config.PORT || 5678;

server.listen(PORT, () => {
  console.log(`Node JS Started at port ${PORT}`);
})




