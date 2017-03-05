var React = require('react');
require('!style!css!sass!../styles/main.scss');

var Add = require('../components/Add');

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
  handleSubmit: function () {
    console.log('handle submit damnit!');
  },
  render: function () {
    return (
      <Add
      canSubmit={this.state.canSubmit}
      handleSubmit={this.state.handleSubmit}/>
    )
  }
});

module.exports = AddContainer;
