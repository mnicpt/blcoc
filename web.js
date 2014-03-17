var express = require('express'),
    app = express(),
    fs = require('fs'),
    path = require('path'); 

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.send(fs.readFileSync("./index.html", {encoding:"UTF-8"}));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
