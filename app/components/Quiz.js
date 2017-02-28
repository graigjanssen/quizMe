var React = require('react');
var PropTypes = React.PropTypes;
require('!style!css!sass!../styles/main.scss');

var Answer = require('../modules/Answer');

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
    <div>
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
