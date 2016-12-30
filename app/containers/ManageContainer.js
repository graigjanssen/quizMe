var React = require('react');
require('!style!css!sass!../styles/main.scss');
var Manage = require('../components/Manage');

var ManageContainer = React.createClass({
  render: function () {
    return (
      <Manage />
    )
  }
});

module.exports = ManageContainer;
