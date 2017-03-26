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
var herokuDB = 'mongodb://heroku_pmjl5579:c28cf07fpf05uus13ipjeur5s7@ds143000.mlab.com:43000/heroku_pmjl5579'

mongoose.connect(process.env.MONGOLAB_URI || dbPath);

// ROUTING / API //

var indexRoute = require('./routes/index');
var questionsRoute = require('./routes/api/questions');
app.use('/', indexRoute);
app.use('/api/questions', questionsRoute);

var port = 3000;
app.listen(process.env.PORT || port, function(){
  console.log('Express server API running!!');
});
