var helpers = {
  syncQuestionTotals: function(categories, selectedCats, prevDifficulties){
    categories.forEach(function(category){
      if (category.name in selectedCats){
        var selectedQuestions = 0;
        for (difficulty in prevDifficulties){
          if (prevDifficulties[difficulty]) {
            selectedQuestions += category.difficulties[difficulty];
          }
        }
        var noDiffSelected = Object.values(prevDifficulties).every(function(difficulty){
          return difficulty === false;
        })
        if (noDiffSelected){
          for (difficulty in category.difficulties){
            selectedQuestions += category.difficulties[difficulty];
          }
        }
        selectedCats[category.name] = selectedQuestions;
      }
    });
    return selectedCats;
  },
  deleteZeroValues: function(obj){
    for (var prop in obj){
      if (obj[prop] === 0){
        delete obj[prop]
      }
    }
    return obj;
  }
}

module.exports = helpers;
