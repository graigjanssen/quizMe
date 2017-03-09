var React = require('react');
require('!style!css!sass!../styles/main.scss');

var Add = require('../components/Add');
var utils = require('../helpers/utils');

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
        answers: []
      }
    }
  },
  handleCategoryInput: function(e) {
    var category = e.target.value;
    this.setState(function(pState){
      var pQuestionData = pState.questionData;
      pQuestionData.category = category;
      return {questionData: pQuestionData};
    });
  },
  handleDifficultySelect: function (e) {
    // Visually deselect previously selected if present
    utils.removeSelected('difficulty');
    // Visually select difficulty
    utils.toggleSelected(e);
    // Update state with data-level attribute
    var selectedDifficulty = e.target.attributes.getNamedItem("data-level").value;
    this.setState(function(pState){
      pQuestionData = pState.questionData;
      pQuestionData.difficulty = selectedDifficulty;
      return {questionData: pQuestionData};
    });
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
      handleSubmit={this.handleSubmit}/>
    )
  }
});

module.exports = AddContainer;
