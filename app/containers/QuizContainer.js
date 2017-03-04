var React = require('react');
require('!style!css!sass!../styles/main.scss');

var quizHelpers = require('../helpers/quizHelpers');
var Quiz = require('../components/Quiz');
var utils = require('../helpers/utils');

var QuizContainer = React.createClass({
  getInitialState: function(){
    return {
      questions: [],
      currentQuestion: 0,
      totalQuestions: 0,
      totalCorrect: 0,
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
      this.setState({
        answered: true
      });
      if (e.target.attributes.getNamedItem("data-correct").value === "true") {
        utils.setStyle(e, "correct");
        this.setState(function(prevState){
          return {totalCorrect: prevState.totalCorrect + 1}
        });
      } else {
        utils.setStyle(e, "incorrect");
      }
    }
  },
  handleNextClick: function(){
    utils.resetStyle("correct", "incorrect");
    this.setState(function(pState){
      return {
        currentQuestion: pState.currentQuestion + 1,
        answered: false
      }
    })
  },
  render: function() {
    if (this.state.quizInProgress){
      return (
        <Quiz
        questions={this.state.questions}
        currentQuestion={this.state.currentQuestion}
        totalQuestions={this.state.totalQuestions}
        totalCorrect={this.state.totalCorrect}
        answered={this.state.answered}
        handleAnswerClick={this.handleAnswerClick}
        handleNextClick={this.handleNextClick}/>
      )
    } else {
      return <div>Loading Quiz...</div>
    }
  }
});

module.exports = QuizContainer;
