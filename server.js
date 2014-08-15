var express = require('express');
var jade = require('jade');
var app = express();

var port = Number(process.env.PORT || 3000);

app.set('views', __dirname + '/public/views');
app.set('view engine', 'jade');
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('app');
});

var server = app.listen(port, function() {
    console.log('Listening on port %d', port);
});

