var React = require('react');
require('!style!css!sass!../styles/main.scss');

var Home = React.createClass({
  render: function () {
    return (
      <div className="home">
        <div className="row">
          <div className="col-xs-12 col-md-4 box">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </div>
          <div className="col-xs-12 col-md-4 box">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </div>
          <div className="col-xs-12 col-md-4 box">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-3 box">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
          <div className="col-xs-12 col-md-3 box">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
          <div className="col-xs-12 col-md-3 box">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
          <div className="col-xs-12 col-md-3 box">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
        </div>
      </div>
    )
  }
});

module.exports = Home;
