var express = require('express');
var app = express();
var dt = require('./datetime.js');

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    while(true){
        let date = dt.getMedDate();
        res.render('pages/index', {date: date});
    }
});

app.listen(8080);
console.log('Server is listening on port 8080');