var React = require('react');
var PropTypes = React.PropTypes;
require('!style!css!sass!../styles/main.scss');

function Quiz(props){
  var question = props.questions[props.currentQuestion];
  var answers = question.answers.map(function(answer){
    return <h5>{answer.text}</h5>
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
