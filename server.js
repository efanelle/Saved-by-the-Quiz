var express =  require('express');
var app = express();
var bodyParser = require('body-parser');
var users = require('./mongoConfig');
var mongoose = require('mongoose');



app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/quiz', function(req,res) {
  console.log('getting correctly');
});

app.post('/quiz', function(req, res) {
  var username = req.body.username;
  var score = req.body.score;
  new users({username: username, score: score}).save(function(err, doc) {
    if (err) {
      throw err;
    }
  });


  // users.find().exec(function(err, results) {
  //   if (results.length === 0) {
  //     new users({username: username, score: score}).save(function(err, data){
  //       if (err) {
  //         throw err;
  //       } else {
  //         console.log('here is the data', data);
  //       }
  //     });
  //   } else {
  //     console.log('there is an error in here somewhere');
  //   }
  // });
});

app.get('/results', function(req, res) {
  users.find(function(err, docs) {
    console.log(docs);
    res.send(docs);
  });
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server is running...');
});