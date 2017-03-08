var React = require('react');
var PropTypes = React.PropTypes;
require('!style!css!sass!../styles/main.scss');

function Difficulty(props){
  // Capitalize level name
  // var levelName = props.level[0].toUpperCase() + props.level.substring(1);
  return (
    <div className="col-xs-4">
      <div className={"difficulty " + props.level} data-level={props.level} onClick={props.onChange}>
        {props.level}
      </div>
    </div>
  )
}

Difficulty.propTypes = {
  level: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

module.exports = Difficulty;
