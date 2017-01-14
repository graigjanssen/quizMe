var React = require('react');
require('!style!css!sass!../../styles/main.scss');

var Difficulty = require('../../modules/Difficulty');

function Difficulties(props) {
  return (
    <div className="difficulties">
      <h2 className="section-subheading text-left">Difficulty</h2>
      <div className="row">
        <Difficulty name="Easy" css="easy"/>
        <Difficulty name="Medium" css="medium"/>
        <Difficulty name="Hard" css="hard"/>
      </div>
    </div>
  )
};

module.exports = Difficulties;
