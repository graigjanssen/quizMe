var React = require('react');
require('!style!css!sass!../../styles/main.scss');
var Nav = require('./Nav');

var Header = React.createClass({
  render: function () {
    return (
      <div className="header">
        <div className="container-fluid">
          <span id="header-title">QuizMe</span>
          <Nav/>
        </div>
      </div>
    )
  }
});

module.exports = Header;
