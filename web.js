var express = require('express');

var app = express.createServer(express.logger());

var readstring = new Buffer(256);
readstring = (fs.readFileSync('index.html'));


app.get('/', function(request, response) {
    response.send(readstring.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});