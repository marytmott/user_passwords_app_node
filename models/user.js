var mongoose = require ('mongoose');

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  }
});

var User = mongoose.model('User', userSchema);
module.exports = User;

