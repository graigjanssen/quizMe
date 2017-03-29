var React = require('react');
require('!style!css!sass!../../styles/main.scss');
var Nav = require('./Nav');

var Header = React.createClass({
  render: function () {
    return (
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-4">
              <img id="header-logo" src={require('../../images/quizMeLogoNav.jpg')} alt="Quiz Me logo"/>
            </div>
            <Nav/>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Header;
