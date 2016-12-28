var React = require('react');
require('!style!css!sass!../styles/main.scss');

var Link = require('react-router').Link;

var Home = React.createClass({
  render: function () {
    return (
      <div className="home">
        <div className="col-xs-12 text-center">
          <h1 id="title">QuizMe</h1>
          <p id="subtitle">A study tool that helps you study.</p>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-4 col-md-offset-2">
            <Link to="/setup">
              <button type="button" className="btn btn-lg btn-primary">New Quiz</button>
            </Link>
          </div>
          <div className="col-xs-12 col-md-4">
          <Link to="/add">
            <button type="button" className="btn btn-lg btn-success">Add Question</button>
          </Link>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Home;
