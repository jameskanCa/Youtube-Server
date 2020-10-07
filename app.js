let express = require("express");
let app = express();
let mongoose = require("mongoose");
let userSchema = require("./Schema/UserSchema");
let port = process.env.PORT || 3001;
let bodyParser = require("body-parser");
let cors = require("cors");

function main() {
  startServerAPIPort();
}
main();

function startServerAPIPort() {
  mongoose.Promise = global.Promise;
  mongoose.connect(
    `mongodb://${DB_USERNAME}:${DB_KEY}@sandbox-shard-00-00.ugkyh.mongodb.net:27017,sandbox-shard-00-01.ugkyh.mongodb.net:27017,sandbox-shard-00-02.ugkyh.mongodb.net:27017/${DB_NAME}?ssl=true&replicaSet=Sandbox-shard-0&authSource=admin&retryWrites=true&w=majority`
  );

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  let routes = require("./APIRoutes");
  routes(app);

  app.listen(port);
  console.log("todo list RESTful API server started on: " + port);
}
