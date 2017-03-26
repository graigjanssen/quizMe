// Dependencies
var express = require('express');
var path = require('path');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.js');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');

var inDev = process.env.NODE_ENV !== 'production';
var port = inDev ? 8080 : process.env.PORT;
var app = express();

// MIDDLEWARE

if (inDev){
  var compiler = webpack(config);
  var middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'app',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(morgan('dev'));
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
  });
} else {
  app.use(express.static(__dirname + '/dist'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

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

// DATABASE

var dbPath = 'mongodb://localhost/quizMe';
mongoose.connect(process.env.MONGOLAB_URI || dbPath);

// ROUTING / API

// var indexRoute = require('./routes/index');
var questionsRoute = require('./routes/api/questions');
// app.use('/', indexRoute);
app.use('/api/questions', questionsRoute);

app.listen(port, function(){
  console.log('Express server up on ' + port);
});
