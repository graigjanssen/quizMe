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
          Correct: {props.totalCorrect}
        </div>
        <div className="col-xs-4 col-md-3 text-left">
          Progress: {props.currentQuestion + 1}/{props.totalQuestions}
        </div>
      </div>
    </div>
  )
}
function QuizNavButton(props){
  return (
    <div className="btn-wrapper text-center">
      <button className="btn btn-lg btn-primary btn-next"
       disabled={!props.answered}
       onClick={props.handleNextClick}>
         {props.buttonText} <i className="fa fa-arrow-circle-right"></i>
       </button>
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
      correct={answer.correct}
      handleClick={props.handleAnswerClick}/>
    )
  });
  var buttonText = props.currentQuestion === props.totalQuestions - 1 ? 'Finish' : 'Next';
  return (
    <div className="quiz">
      <QuizBar
      totalCorrect={props.totalCorrect}
      currentQuestion={props.currentQuestion}
      totalQuestions={props.totalQuestions}/>
      <div className="row">
        <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 quiz-body text-left">
          <h3 className="question">{question.text}</h3>
          <ul className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
            {answers}
          </ul>
          <QuizNavButton
          answered={props.answered}
          handleNextClick={props.handleNextClick}
          buttonText={buttonText}/>
        </div>
      </div>
    </div>
  )
}

Quiz.propTypes = {
  questions: PropTypes.array.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  currentQuestion: PropTypes.number.isRequired,
  totalCorrect: PropTypes.number.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired
}


module.exports = Quiz;
