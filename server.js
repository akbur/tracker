//setup
var express = require('express');
var morgan = require('morgan');
var app = express();
var port = process.env.PORT || 1337;
var db = require('./app/config');

//configuration
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

//routes
require('./app/routes.js')(app);

//listen
app.listen(port);
console.log('App listening on port ', port);
