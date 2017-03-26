var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove caching so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

// DATABASE //

var dbPath = 'mongodb://localhost/quizMe';
mongoose.connect(dbPath);

// ROUTING / API //

var indexRoute = require('./routes/index');
var questionsRoute = require('./routes/api/questions');
app.use('/', indexRoute);
app.use('/api/questions', questionsRoute);

app.listen(3000, function(){
  console.log('Express server API running!!');
});
