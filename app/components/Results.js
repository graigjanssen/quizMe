var React = require('react');
require('!style!css!sass!../styles/main.scss');
var Link = require('react-router').Link;

function Results(props){
  var score = props.location.state.score;
  var rating, message;
  if (score < 60){
    rating = "bad", message = "Ouch! Better luck next time!";
  } else if (score < 80){
    rating = "okay", message = "Nice work, but there's room for improvement...";
  } else if (score < 100){
    rating = "good", message = "Very nice! Keep up the good work!";
  } else if (score === 100){
    rating = "good", message = "Perfect! You know your stuff!";
  } else {
    rating = "okay", message = "I don't know what's going on";
  }
  return (
    <div className="results text-center row">
      <h1 className="heading col-xs-12">Quiz Complete</h1>
      <h2>Your Score</h2>
      <h1 className={"score col-xs-4 col-xs-offset-4 col-sm-2 col-sm-offset-5 " + rating}>{score}%</h1>
      <h3 className="message col-xs-12">{message}</h3>
      <div className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4">
        <Link to="/setup">
          <button className="btn btn-lg btn-primary">Take Another Quiz</button>
        </Link>
      </div>
    </div>
  )
}

module.exports = Results;
