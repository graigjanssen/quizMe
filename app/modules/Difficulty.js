var React = require('react');
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

module.exports = Difficulty;
