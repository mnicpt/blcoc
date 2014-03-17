var express = require("express"),
    app = express(); 

app.get('/', function(req, res) {
  res.send('<center><h1>Under Construction.</h1>Contact Steve at 217-369-2921 for directions and time of Sunday worship service.<br>Sorry for any inconvenience as we update our site.</center>');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
