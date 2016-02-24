var mongoose = require('mongoose');

var mongoURI = process.env.MONGOLAB_URI || 'mongodb://127.0.0.1/trackdb';

mongoose.connect(mongoURI);

var db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to database."));

db.once('open', function() {
  console.log('Connected to database.');
});

module.exports = db;