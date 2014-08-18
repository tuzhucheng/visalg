var express = require('express');
var jade = require('jade');
var app = express();
var router = express.Router();

var port = Number(process.env.PORT || 3000);

app.set('views', __dirname + '/public/views');
app.set('view engine', 'jade');
app.use(express.static('public'));

// logging
router.use(function(req, res, next) {
    console.log('%s %s %s', req.method, req.url, req.path);
    next();
});

app.use(router);

app.get('/', function(req, res) {
    res.render('app');
});

app.get('/partials/:name', function(req, res) {
    var name = req.params.name;
    console.log("name is " + name);
    res.render(name);
})

var server = app.listen(port, function() {
    console.log('Listening on port %d', port);
});

