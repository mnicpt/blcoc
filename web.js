var express = require('express'),
    app = express(),
    fs = require('fs'),
    path = require('path'); 

app.use('/public', express.static(path.join(__dirname, 'public')));
['css', 'img', 'js'].forEach(function(dir) {
    app.use('/' + dir, express.static(__dirname + '/' + dir));
});

app.get('/', function(req, res) {
  res.send(fs.readFileSync("./index.html", {encoding:"UTF-8"}));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
