var React = require('react');
require('!style!css!sass!../styles/main.scss');

var quizHelpers = require('../helpers/quizHelpers');

var QuizContainer = React.createClass({
  getInitialState: function(){
    // TO DO: set up state to track quiz progress
    return {
      questions: []
    }
  },
  componentDidMount: function(){
    var params = {
      difficulties: this.props.location.state.difficulties,
      selected: this.props.location.state.selected
    };
    console.log('params before axios: ', params);
    quizHelpers.getQuestions(params).then(function(data){
      console.log('getQs response: ', data);
    });
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
