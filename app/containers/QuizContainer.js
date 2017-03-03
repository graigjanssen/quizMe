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
      quizInProgress: false,
      answered: false
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
        totalQuestions: questions.length,
        quizInProgress: true
      })
    }.bind(this));
  },
  handleAnswerClick: function(e) {
    if (!this.state.answered) {
      console.log('correct?: ', e.target.attributes.getNamedItem("data-correct").value);
      this.setState({
        answered: true
      });
    }
  },
  render: function() {
    if (this.state.quizInProgress){
      return (
        <Quiz
        questions={this.state.questions}
        currentQuestion={this.state.currentQuestion}
        totalQuestions={this.state.totalQuestions}
        correct={this.state.correct}
        answered={this.state.answered}
        handleAnswerClick={this.handleAnswerClick}/>
      )
    } else {
      return <div>Loading Quiz...</div>
    }
  }
});

module.exports = QuizContainer;
