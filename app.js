let express = require('express');
let app = express();
let mongoose = require('mongoose');
let VideoSession = require('./DatabaseUtils');
let port = process.env.PORT || 3001;
let bodyParser = require('body-parser');



function main(){
    startServerAPIPort();
}
main();

function startServerAPIPort(){
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/local'); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


let routes = require('./APIRoutes');
routes(app);


app.listen(port);
console.log('todo list RESTful API server started on: ' + port);
}