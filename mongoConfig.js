var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/sbtbusers');
mongoose.connect(process.env.MONGOLAB_URI);
// console.log(process.env.MONGOLAB_URI);



var UserSchema = new mongoose.Schema({
  username: String,
  score: String
});


module.exports = mongoose.model('users', UserSchema);