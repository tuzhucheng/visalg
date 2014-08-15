var express = require('express');
var app = express();

var port = Number(process.env.PORT || 3000);

app.get('/hello', function(req, res) {
    res.send('Welcome to Glowing Adventure');
});

var server = app.listen(port, function() {
    console.log('Listening on port %d', port);
});

