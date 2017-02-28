var React = require('react');
require('!style!css!sass!../styles/main.scss');

function Quiz(props){
  console.log('props questions: ', props.questions);
  var question = props.questions[0];
  console.log('first question: ', question);
  return (
    <div>quiz child</div>
  )
}

module.exports = Quiz;
