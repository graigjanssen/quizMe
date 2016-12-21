var express = require('express');
var router = express.Router();
var Question = require('../../models/question');
var seedQuestions = require('../../seeds/seedQuestions');

router.get('/', function(req, res){
  Question.find({}, function(err, dbQuestions){
    res.json({questions: dbQuestions});
  });
});

module.exports = router;
