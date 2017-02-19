var React = require('react');
require('!style!css!sass!../styles/main.scss');

var QuizContainer = React.createClass({
  getInitialState: function(){
    // TO DO: set up state to track quiz progress
    return {
      questions: []
    }
  },
  componentDidMount: function(){
    console.log(this.props.location.state.selected);
    // TO DO: Create, call helper function that uses 'selected' object and difficulties to get questions
  },
  render: function(){
    return (
      <div>
        Quiz goes here baby
      </div>
    )
  }
});

module.exports = QuizContainer;
