var React = require('react');
require('!style!css!sass!../../styles/main.scss');
var Nav = require('./Nav');

var Header = React.createClass({
  render: function () {
    return (
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-2">
              <span className="header-title">QuizMe</span>
            </div>
            <div className="col-xs-8">
              <Nav/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Header;
