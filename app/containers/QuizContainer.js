var React = require('react');
require('!style!css!sass!../styles/main.scss');

var quizHelpers = require('../helpers/quizHelpers');
var Quiz = require('../components/Quiz');

var QuizContainer = React.createClass({
  getInitialState: function(){
    return {
      questions: [],
      currentQuestion: 0,
      totalQuestions: 0,
      correct: 0,
      quizInProgress: true
    }
  },
  componentWillMount: function(){
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
    if (this.state.totalQuestions){
      return (
        <h3>{this.state.questions[0].text}</h3>
      )
    } else {
      return <div>Loading...</div>
    }
  }
});

module.exports = QuizContainer;
