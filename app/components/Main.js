var React = require('react');
require('!style!css!sass!../styles/main.scss');

var Main = React.createClass({
  render: function () {
    return (
      <div className="main">
        Main
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
