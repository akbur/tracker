var express = require('express');
var morgan = require('morgan');
var app = express();

var port = process.env.PORT || 1337;

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

app.get('/', function(req, res) {
  res.render('/index');
})

app.listen(port);
