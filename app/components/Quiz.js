var React = require('react');
require('!style!css!sass!../styles/main.scss');

function Quiz(props){
  var question = props.questions[props.currentQuestion];
  return (
    <div>{question.text}</div>
  )
}

module.exports = Quiz;
