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
  handleDifficultySelect: function (e) {
    console.log('handle difficulty select you clod!');
    utils.toggleSelected(e);
  },
  handleSubmit: function () {
    console.log('handle submit damnit!');
  },
  render: function () {
    return (
      <Add
      canSubmit={this.state.canSubmit}
      handleDifficultySelect={this.handleDifficultySelect}
      handleSubmit={this.handleSubmit}/>
    )
  }
});

module.exports = AddContainer;
