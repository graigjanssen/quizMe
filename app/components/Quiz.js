var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
require('!style!css!sass!../styles/main.scss');

var Answer = require('../modules/Answer');

function QuizBar(props){
  return (
    <div className="quiz-bar">
      <div className="row">
        <div className="col-xs-3 col-md-2 col-md-offset-1 text-left">
          <Link to="/setup">
            <button className="btn btn-danger">Exit</button>
          </Link>
        </div>
        <div className="col-xs-3 col-xs-offset-2 col-md-2 col-md-offset-4 text-left">
          Correct: {props.correct}
        </div>
        <div className="col-xs-4 col-md-3 text-left">
          Progress: {props.currentQuestion + 1}/{props.totalQuestions}
        </div>
      </div>
    </div>
  )
}
function Quiz(props){
  var question = props.questions[props.currentQuestion];
  var answers = question.answers.map(function(answer, index){
    return (
      <Answer
      key={index}
      text={answer.text}
      correct={answer.correct}/>
    )
  })
  return (
    <div className="quiz">
      <QuizBar
      correct={props.correct}
      currentQuestion={props.currentQuestion}
      totalQuestions={props.totalQuestions}/>
      <h3>{question.text}</h3>
      {answers}
    </div>
  )
}

Quiz.propTypes = {
  questions: PropTypes.array.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  currentQuestion: PropTypes.number.isRequired,
  correct: PropTypes.number.isRequired
}


module.exports = Quiz;
