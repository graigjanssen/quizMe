var React = require('react');
require('!style!css!sass!../styles/main.scss');
var Link = require('react-router').Link;

function Results(props){
  return (
    <div className="results text-center">
      <h1>Quiz Complete</h1>
      <h3>Your Score</h3>
      <h1>{props.location.state.score}%</h1>
      <Link to="/setup">
        <button className="btn btn-lg btn-primary">Take Another Quiz</button>
      </Link>
    </div>
  )
}

module.exports = Results;
