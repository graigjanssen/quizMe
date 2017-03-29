var React = require('react');
require('!style!css!sass!../../styles/main.scss');
var Nav = require('./Nav');

var Header = React.createClass({
  render: function () {
    return (
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-4 col-sm-3 col-md-2">
              <img id="header-logo" src={require('../../images/quizMeLogoNav.png')} alt="Quiz Me logo"/>
            </div>
            <Nav/>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Header;
