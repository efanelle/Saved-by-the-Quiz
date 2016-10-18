var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sbtbusers');


var UserSchema = new mongoose.Schema({
  username: String,
  score: String
});


module.exports = mongoose.model('users', UserSchema);