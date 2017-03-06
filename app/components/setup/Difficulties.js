var React = require('react');
var PropTypes = React.PropTypes;
require('!style!css!sass!../../styles/main.scss');

var Difficulty = require('../../modules/Difficulty');

function Difficulties(props) {
  var difficultyComponents = ['easy', 'medium', 'hard'].map(function(difficulty){
    return <Difficulty level={difficulty} onChange={props.onChange}/>
  });
  return (
    <div className="difficulties">
      <h2 className="section-subheading text-left">Difficulty</h2>
      <div className="row">
        {difficultyComponents}
      </div>
    </div>
  )
};

Difficulties.propTypes = {
  onChange: PropTypes.func.isRequired
}


module.exports = Difficulties;
