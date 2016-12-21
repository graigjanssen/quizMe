var express = require('express');
var router = express.Router();
var seedQuestions = require('../../seeds/seedQuestions');

router.get('/', function(req, res){
  res.json({seedQuestions})
});


module.exports = router;
