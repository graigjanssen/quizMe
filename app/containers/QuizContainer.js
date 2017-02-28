var React = require('react');
require('!style!css!sass!../styles/main.scss');

var quizHelpers = require('../helpers/quizHelpers');
var Quiz = require('../components/Quiz');

var QuizContainer = React.createClass({
  getInitialState: function(){
    // TO DO: set up state to track quiz progress
    return {
      questions: [],
      currentQuestion: 0,
      totalQuestions: 0,
      correct: 0,
      quizInProgress: true
    }
  },
  componentDidMount: function(){
    var params = {
      difficulties: this.props.location.state.difficulties,
      selected: this.props.location.state.selected
    };
    quizHelpers.getQuestions(params).then(function(questions){
      this.setState({
        questions: questions,
        totalQuestions: questions.length
      })
    }.bind(this));
  },
  render: function() {
    var question = this.state.questions[0];
    console.log(question.answers);
    // For some reason we can't access any properties!
    return (
      <div>ack</div>
    )
  }
});

module.exports = QuizContainer;
