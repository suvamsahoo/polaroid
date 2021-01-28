var express = require("express");
var app = express();
port = 4000;
 
app.use(express.static("Home"));
app.use(express.static("Contact"));
 

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/home.html");
});
app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/contact.html");
});
 

app.listen(process.env.PORT || port, function () { 
  console.log(`SERVER STARTED PORT: ${port}`); 
}); 
