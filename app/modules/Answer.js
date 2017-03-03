var React = require('react');
var PropTypes = React.PropTypes;
require('!style!css!sass!../styles/main.scss');

function Answer(props){
  return (
    <li className="answer text-center"
    onClick={props.handleClick}
    data-correct={props.correct}>
      {props.text}
    </li>
  )
}

Answer.propTypes = {
  text: PropTypes.string.isRequired,
  correct: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
}

module.exports = Answer;
