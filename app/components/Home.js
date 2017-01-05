var React = require('react');
require('!style!css!sass!../styles/main.scss');

var Link = require('react-router').Link;

var Home = React.createClass({
  render: function () {
    return (
      <div className="home">
        <div className="row text-center">
          <div className="col-xs-12">
            <h1 id="title">QuizMe</h1>
          </div>
          <div className="col-xs-12 col-md-8 col-md-offset-2">
            <p id="subtitle">Studying for stuff is hard.  Now it is less hard.  Use QuizMe to build your very own quiz thing.  Do the thing and feel smarter betterer.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-4 col-md-offset-2">
            <Link to="/setup">
              <button type="button" className="btn btn-primary space">New Quiz</button>
            </Link>
          </div>
          <div className="col-xs-12 col-md-4">
          <Link to="/add">
            <button type="button" className="btn btn-success space">Add Question</button>
          </Link>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Home;
