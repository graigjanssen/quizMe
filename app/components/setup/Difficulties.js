var React = require('react');
require('!style!css!sass!../../styles/main.scss');

var Difficulty = require('../../modules/Difficulty');

function Difficulties(props) {
  return (
    <div className="difficulties">
      <h2 className="section-subheading text-left">Difficulty</h2>
      <div className="row">
        <Difficulty name="Easy" css="easy" handleClick={props.handleClick}/>
        <Difficulty name="Medium" css="medium" handleClick={props.handleClick}/>
        <Difficulty name="Hard" css="hard" handleClick={props.handleClick}/>
      </div>
    </div>
  )
};

module.exports = Difficulties;
