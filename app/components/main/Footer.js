var React = require('react');
require('!style!css!sass!../../styles/main.scss');

var Footer = React.createClass({
  render: function () {
    return (
      <div className="footer container-fluid text-center">
        <div className="row">
          <div className="col-xs-12">
            <p className="footer-text">
              QuizMe copyright &copy; Graig Janssen 2017
            </p>
            <p className="footer-text">
              Website: <a href="http://www.graigjanssen.com">graigjanssen.com</a> &nbsp;&nbsp;
              Source Code: <a href="http://www.github.com/graigjanssen/quizMe">www.github.com/graigjanssen/quizMe</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Footer;
