var React = require('react');
var PropTypes = React.PropTypes;
require('!style!css!sass!../styles/main.scss');

function Answer(props){
  return (
    <h5>{props.text}</h5>
  )
}

Answer.propTypes = {
  text: PropTypes.string.isRequired,
  correct: PropTypes.bool.isRequired
}

module.exports = Answer;
