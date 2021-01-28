var express = require("express");
var app = express();
port = 4000;
 
app.use(express.static("Home"));
 

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/home.html");
});
 

app.listen(process.env.PORT || port, function () { 
  console.log(`SERVER STARTED PORT: ${port}`); 
}); 
