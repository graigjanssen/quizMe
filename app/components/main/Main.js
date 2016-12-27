var React = require('react');
require('!style!css!sass!../../styles/main.scss');

var Header = require('./Header');
var Footer = require('./Footer');

var Main = React.createClass({
  render: function () {
    return (
      <div className="container-fluid main">
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
});

module.exports = Main;
