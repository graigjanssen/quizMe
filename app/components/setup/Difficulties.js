var React = require('react');
var PropTypes = React.PropTypes;
require('!style!css!sass!../../styles/main.scss');

var Difficulty = require('../../modules/Difficulty');

function Difficulties(props) {
  return (
    <div className="difficulties">
      <h2 className="section-subheading text-left">Difficulty</h2>
      <div className="row">
        <Difficulty name="Easy" css="easy" onChange={props.onChange}/>
        <Difficulty name="Medium" css="medium" onChange={props.onChange}/>
        <Difficulty name="Hard" css="hard" onChange={props.onChange}/>
      </div>
    </div>
  )
};

Difficulties.propTypes = {
  onChange: PropTypes.func.isRequired
}


module.exports = Difficulties;
