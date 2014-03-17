var express = require("express"),
    app = express.createServer(); 

app.get('/', function(request, response) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Currently Under Construction</h1>Call 217-369-2921 for information on Worship Service location and time and current events to be involved in.<br>Sorry for any inconvenience.');
}).listen(8080, function(){console.log("Listening on port 8080"});
