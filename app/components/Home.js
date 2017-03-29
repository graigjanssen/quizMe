var React = require('react');
require('!style!css!sass!../styles/main.scss');

var Link = require('react-router').Link;

var Home = React.createClass({
  render: function () {
    return (
      <div className="home">
        <div className="row text-center">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
            <img id="logo" src={require('../images/quizMeLogo.jpg')} alt="Quiz Me Logo"></img>
          </div>
          <div className="col-xs-12 col-md-8 col-md-offset-2">
            <p id="subtitle">Have an exam coming up? Add questions and take a customized quiz to get ready!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-5 col-md-offset-1">
            <Link to="/setup">
              <button type="button" className="btn btn-primary space">Take a Quiz</button>
            </Link>
          </div>
          <div className="col-xs-12 col-md-5">
          <Link to="/add">
            <button type="button" className="btn btn-success space">Add New Question</button>
          </Link>
          </div>
        </div>
        <div className="row space">
          <div className="col-xs-12 col-sm-8 col-sm-offset-2 note text-left">
            <p className="space">
              This is an early demo version of QuizMe designed to show the key concept of the app. Future updates will allow users to create accounts and manage personalized collections of questions.
            </p>
            <p className="space">
              At this time, question submissions are not being actively monitored or moderated.  Content of available questions does not necessarily reflect the views of the app's creator.
            </p>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Home;
