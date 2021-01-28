var express = require("express");
var app = express();
port = 4000;
 
app.use(express.static("Home"));
app.use(express.static("Contact"));
app.use(express.static("Galleries"));
app.use(express.static("Travel"));
 

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/home.html");
});
app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/contact.html");
});
app.get("/galleries", function (req, res) {
  res.sendFile(__dirname + "/galleries.html");
});
app.get("/travel", function (req, res) {
  res.sendFile(__dirname + "/travel.html");
});
 

app.listen(process.env.PORT || port, function () { 
  console.log(`SERVER STARTED PORT: ${port}`); 
}); 
