var mongoose = require('mongoose');

var localURI = 'mongodb://127.0.0.1/trackdb';
var mongoURI = process.env.MONGOLAB_URI || localUri;

mongoose.connect(mongoURI);
var db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to database."));
db.once('open', function() {
  console.log('Connected to database.');
});

module.exports = db;