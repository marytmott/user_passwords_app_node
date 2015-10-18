var mongoose = require('mongoose');
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/user_pw');
mongoose.set('debug', true);
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
  console.log('connected to user_pw db');
});

module.exports.User = require('./user');