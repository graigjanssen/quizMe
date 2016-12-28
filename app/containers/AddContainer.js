var React = require('react');
require('!style!css!sass!../styles/main.scss');
var Add = require('../components/Add');

var AddContainer = React.createClass({
  render: function () {
    return (
      <Add />
    )
  }
});

module.exports = AddContainer;
