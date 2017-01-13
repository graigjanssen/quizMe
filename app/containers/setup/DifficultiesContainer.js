var React = require('react');
require('!style!css!sass!../../styles/main.scss');

var Difficulties = require('../../components/setup/Difficulties');

var DifficultiesContainer = React.createClass({
  render: function () {
    return (
      <Difficulties />
    )
  }
});

module.exports = DifficultiesContainer;
