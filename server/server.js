var express = require('express');
var path = require('path');

//Middleware Dependencies
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//Configuration & Project Dependencies
var db = require('./dbConfig');

var routes = require('./routes.js');
var userRoutes = require('./users/userRoutes');

var port = process.env.PORT || 1337;

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));        
app.use(bodyParser.json());                             
//app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
//app.use(methodOverride());

app.use('/api', routes);
app.use('/auth', userRoutes);

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function(req, res) {
  res.sendFile('/index.html');
});

app.listen(port, function(){
  console.log('App listening on port ', port);
});
