var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL);

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/public', express.static(path.join(__dirname, '/public')));
require('./config/todo.js')
require('./app/routes.js')(app);

var server = app.listen(3000, function() {
  var port = server.address().port;

  console.log('This wicked cool app is listening at: ' + port);
});