var express = require('express');
var router = express.Router();
var Question = require('../../models/question');
var seedQuestions = require('../../seeds/seedQuestions');

function getCategoryMap(questions){
  var categoryMap = {};
  questions.forEach(function(question){
    var category = question.category;
    var difficulty = question.difficulty;
    if (category in categoryMap) {
       // set category equal to difficulty map object
       categoryMap[category][difficulty]++;
    } else {
       // add category to categoryMap, set equal to difficulty map with E,M,or H equal to 1
       categoryMap[category] = {"E":0,"M":0,"H":0};
       categoryMap[category][difficulty]++;
    }
  });
  return categoryMap;
}

router.get('/categories', function(req, res){
  Question.find({}, function(err, dbQuestions){
    res.json({totalQuestionsByCategory: getCategoryMap(dbQuestions)});
  });
});

// Currently for experimental purposes only
router.get('/science', function(req, res){
  Question.find({category: "Science"}, function(err, dbQs){
    res.json({howManyScienceQs: dbQs.length});
  });
});

module.exports = router;
