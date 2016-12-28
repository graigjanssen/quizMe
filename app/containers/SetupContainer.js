var React = require('react');
require('!style!css!sass!../styles/main.scss');

var Setup = require('../components/Setup');

var SetupContainer = React.createClass({
  render: function () {
    return (
      <Setup />
    )
  }
});

module.exports = SetupContainer;
