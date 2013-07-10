var express = require('express');

var app = express.createServer(express.logger());

var readstring = fs.readFileSync('index.html', [encoding]);


app.get('/', function(request, response) {
    response.send(readstring);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});