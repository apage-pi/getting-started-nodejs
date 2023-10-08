var express = require('express');
var app = express();
var dt = require('./datetime.js');

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    let date = dt.getMedDate();
    let time = dt.getTime(true);
    res.render('pages/index', {date: date, time: time});
});

// About page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(8080);
console.log('Server is listening on port 8080');