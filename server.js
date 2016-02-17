//setup
var express = require('express');
var morgan = require('morgan');
var app = express();
var port = process.env.PORT || 1337;
var db = require('./app/config');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//config

//set static file location
app.use(express.static(__dirname + '/public'));
//log requests to the console
app.use(morgan('dev'));
//parse app
app.use(bodyParser.urlencoded({'extended':'true'}));        
app.use(bodyParser.json());                             
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

//routes
require('./app/routes.js')(app);

//listen
app.listen(port);
console.log('App listening on port ', port);
