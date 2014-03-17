var express = require("express"),
    app = express(); 

app.get('/', function(request, response) {
  response.send('<h1>Currently Under Construction</h1>Call 217-369-2921 for information on Worship Service location and time and current events to be involved in.<br>Sorry for any inconvenience.');
}).listen(8080, function() {
    console.log("Listening on port 8080");
});
