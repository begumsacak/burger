var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();
var routes = require('./controllers/burgers_controller.js')

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
// express PORT
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
app.use(routes)
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.listen(PORT, function () {
    console.log("App is listening on", + PORT)
});