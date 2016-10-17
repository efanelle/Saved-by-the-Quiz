var express =  require('express');
var app = express();


// app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.get('/', function(req, res) {
  res.render('index.html');
});


var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server is running...');
});