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
        answers: []
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
      handleSubmit={this.handleSubmit}/>
    )
  }
});

module.exports = AddContainer;
