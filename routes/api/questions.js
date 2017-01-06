var express = require('express');
var router = express.Router();
var Question = require('../../models/question');
var seedQuestions = require('../../seeds/seedQuestions');

// Transform categoryMap object into array of objects, each with category name and difficulties
function getCategoryTotals(questions){
  var categoryMap = getCategoryMap(questions);
  var categoryTotals = [];
  for (category in categoryMap) {
    var categoryObj = {
      name: category,
      difficulties: categoryMap[category]
    }
    categoryTotals.push(categoryObj)
  }
  return categoryTotals;
}
// Get object where keys = category names, values = objects with question totals by difficulty
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
    res.json({categoryTotals: getCategoryTotals(dbQuestions)});
  });
});

// Currently for experimental purposes only
router.get('/science', function(req, res){
  Question.find({category: "Science"}, function(err, dbQs){
    res.json({howManyScienceQs: dbQs.length});
  });
});

module.exports = router;
