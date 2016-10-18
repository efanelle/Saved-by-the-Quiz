var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sbtbusers');
// mongoose.connect('mongodb://efanelle:password@ds061506.mlab.com:61506/sbtbusers');



var UserSchema = new mongoose.Schema({
  username: String,
  score: String
});


module.exports = mongoose.model('users', UserSchema);