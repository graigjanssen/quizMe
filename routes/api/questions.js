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
       categoryMap[category] = {"easy":0,"medium":0,"hard":0};
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

router.get('/seed', function(req, res){
  seedQuestions.forEach(function(question){
    var newQ = new Question(question);
    newQ.save();
  });
});

router.get('/', function(req, res){
  var selected = JSON.parse(req.query.selected);
  var categories = Object.keys(selected);
  var difficulties = req.query.difficulties;
  Question.find({
     category: {$in: categories},
     difficulty: {$in: difficulties}}, function(err, dbQuestions){
    res.json(dbQuestions);
  });
});

router.post('/', function(req, res){
  var newQuestion = new Question(req.body);
  newQuestion.save(function(err, dbQ){
    res.json(dbQ);
  });
});

module.exports = router;
