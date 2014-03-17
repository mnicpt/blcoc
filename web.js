var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('<h1>Currently Under Construction</h1>Call 217-369-2921 for information on Worship Service location and time and current events to be involved in.  Ask for Steve.  Sorry for any inconvenience.');
}).listen(8080, '/');

console.log('Server running...');