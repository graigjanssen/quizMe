var React = require('react');
var PropTypes = React.PropTypes;
require('!style!css!sass!../styles/main.scss');

function Difficulty(props){
  return (
    <div className="col-xs-4">
      <div className={"difficulty " + props.css} onClick={props.handleChange}>
        {props.name}
      </div>
    </div>
  )
}

Difficulty.propTypes = {
  name: PropTypes.string.isRequired,
  css: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

module.exports = Difficulty;
