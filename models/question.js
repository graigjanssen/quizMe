var mongoose = require('mongoose');

var AnswerSchema = mongoose.Schema({
  text: {type: String, required: true},
  correct: Boolean
});

var QuestionSchema = mongoose.Schema({
  text: {type: String, required: true},
  answers: [AnswerSchema],
  difficulty: String,
  category: String
});


module.exports = mongoose.model('Question', QuestionSchema);
