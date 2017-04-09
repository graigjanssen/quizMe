var React = require('react');
require('!style!css!sass!../styles/main.scss');

var Add = require('../components/Add');
var quizHelpers = require('../helpers/quizHelpers');
var utils = require('../helpers/utils');

// Helper function to update properties of state.questionData without disturbing rest of it. Second argument will be object like {key: 'category', value: 'Geography'}
function updateQuestionData(prevState, props){
  pQuestionData = prevState.questionData;
  pQuestionData[props.key] = props.value;
  return {questionData: pQuestionData};
};
// Will be called in form event handlers' setState function.  After questionData object is updated, check if criteria for submit is met
function canSubmit(questionData){
  var output = true;
  for (var prop in questionData){
    if (typeof questionData[prop] === 'string'){
      if (questionData[prop] == false) {
        output = false;
        break;
      }
    }  else if (Array.isArray(questionData[prop]) === true) {
      // Make sure there are at least two answers with one marked as correct
      var answers = questionData[prop];
      var completed = answers.filter(function(answer){ return answer.text.length > 0 });
      var marked = answers.filter(function(answer){ return answer.correct === true; });
      if (completed.length < 2 || marked.length === 0) { output = false; }
    }
  }
  return output;
}

// Remove empty answers before submitting. Resolves issue where appears to post to db, but actually doesn't
function removeEmptyAnswers(pState){
  var pQuestionData = pState.questionData;
  pQuestionData.answers = pQuestionData.answers.filter(function(answer){
    return answer.text;
  })
  return {questionData: pQuestionData}
}

var AddContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      canSubmit: false,
      questionData: {
        text: '',
        difficulty: '',
        category: '',
        answers: [
          {
            text: '',
            correct: false
          },
          {
            text: '',
            correct: false
          },
          {
            text: '',
            correct: false
          },
          {
            text: '',
            correct: false
          }
        ]
      }
    }
  },
  handleCategoryInput: function(e) {
    var nextProps = {key: 'category', value: e.target.value};
    this.setState(function(pState){
      var nextState = updateQuestionData(pState, nextProps);
      nextState.canSubmit = canSubmit(nextState.questionData);
      return nextState;
    });
  },
  handleDifficultySelect: function (e) {
    // Visually deselect previously selected if present
    utils.removeSelected('difficulty');
    // Visually select difficulty
    utils.toggleSelected(e);
    // Update state with data-level attribute
    var nextProps = {
      key: 'difficulty',
      value: e.target.attributes.getNamedItem("data-level").value
    };
    this.setState(function(pState){
      var nextState = updateQuestionData(pState, nextProps);
      nextState.canSubmit = canSubmit(nextState.questionData);
      return nextState;
    });
  },
  handleQuestionInput: function (e) {
    var nextProps = {key: 'text', value: e.target.value};
    this.setState(function(pState){
      var nextState = updateQuestionData(pState, nextProps);
      nextState.canSubmit = canSubmit(nextState.questionData);
      return nextState;
    });
  },
  handleAnswerSelect: function (e) {
    // Update icon styles
    var icons = document.getElementsByClassName("answer-input-select");
    for (var i=0; i < icons.length; i++){
      icons[i].classList.remove('fa-check-circle-o');
      icons[i].classList.add('fa-circle-o');
      // Reset wrapper selected styles
      icons[i].parentElement.classList.remove('selected');
    }
    e.target.classList.remove('fa-circle-o');
    e.target.classList.add('fa-check-circle-o');
    // Update wrapper style
    e.target.parentElement.classList.toggle('selected');
    // Update state
    var slot = e.target.attributes.getNamedItem('data-slot').value;
    this.setState(function(pState){
      var pQuestionData = pState.questionData;
      // Set previously selected to false
      pQuestionData.answers.forEach(function(answer){
        if (answer.correct === true){
          answer.correct = false;
        }
      });
      // Set selected answer's correct prop to true
      pQuestionData.answers[slot].correct = true;
      return {
        questionData: pQuestionData,
        canSubmit: canSubmit(pQuestionData)
      };
    });
  },
  handleAnswerInput: function (e) {
    var answerText = e.target.value,
        slot = e.target.attributes.getNamedItem('data-slot').value;
    this.setState(function(pState){
      var pQuestionData = pState.questionData;
      pQuestionData.answers[slot].text = answerText;
      var canSubmitResult = canSubmit(pQuestionData);
      return {
        questionData: pQuestionData,
        canSubmit: canSubmitResult
      };
    })
  },
  handleSubmit: function () {
    this.setState(removeEmptyAnswers);
    quizHelpers.addQuestion(this.state.questionData)
    .then(function(){
      this.context.router.push('/confirm-add');
    }.bind(this));
  },
  render: function () {
    return (
      <Add
      canSubmit={this.state.canSubmit}
      handleCategoryInput={this.handleCategoryInput}
      handleDifficultySelect={this.handleDifficultySelect}
      handleQuestionInput={this.handleQuestionInput}
      handleAnswerSelect={this.handleAnswerSelect}
      handleAnswerInput={this.handleAnswerInput}
      handleSubmit={this.handleSubmit}/>
    )
  }
});

module.exports = AddContainer;
