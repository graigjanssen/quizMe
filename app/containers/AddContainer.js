var React = require('react');
require('!style!css!sass!../styles/main.scss');

var Add = require('../components/Add');
var utils = require('../helpers/utils');

// Helper function to update properties of state.questionData without disturbing rest of it. Second argument will be object like {key: 'category', value: 'Geography'}
function updateQuestionData(prevState, props){
  pQuestionData = prevState.questionData;
  pQuestionData[props.key] = props.value;
  return {questionData: pQuestionData};
};

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
      updateQuestionData(pState, nextProps)
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
      updateQuestionData(pState, nextProps);
    });
  },
  handleQuestionInput: function (e) {
    var nextProps = {key: 'text', value: e.target.value};
    this.setState(function(pState){
      updateQuestionData(pState, nextProps)
    });
  },
  handleAnswerSelect: function (e) {
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
      return {questionData: pQuestionData};
    });
  },
  handleAnswerInput: function (e) {
    var answerText = e.target.value,
        slot = e.target.attributes.getNamedItem('data-slot').value;
    this.setState(function(pState){
      var pQuestionData = pState.questionData;
      pQuestionData.answers[slot].text = answerText;
      return {questionData: pQuestionData};
    })

  },
  handleSubmit: function () {
    console.log('handle submit damnit!');
  },
  componentDidUpdate: function(){
    console.log('state: ', this.state);
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
