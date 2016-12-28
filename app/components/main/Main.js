var React = require('react');
require('!style!css!sass!../../styles/main.scss');

var Header = require('./Header');
var Footer = require('./Footer');

var Main = React.createClass({
  render: function () {
    return (
      <div className="global">
        <Header/>
        <div className="main container-fluid">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
});

module.exports = Main;
