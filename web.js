var express = require("express"),
    app = express(); 

app.get('/', function(request, response) {
  response.send('Under Construction.');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
