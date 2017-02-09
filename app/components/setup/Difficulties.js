var React = require('react');
var PropTypes = React.PropTypes;
require('!style!css!sass!../../styles/main.scss');

var Difficulty = require('../../modules/Difficulty');

function Difficulties(props) {
  return (
    <div className="difficulties">
      <h2 className="section-subheading text-left">Difficulty</h2>
      <div className="row">
        <Difficulty name="Easy" css="easy" handleChange={props.handleChange}/>
        <Difficulty name="Medium" css="medium" handleChange={props.handleChange}/>
        <Difficulty name="Hard" css="hard" handleChange={props.handleChange}/>
      </div>
    </div>
  )
};

Difficulties.propTypes = {
  handleChange: PropTypes.func.isRequired
}


module.exports = Difficulties;
