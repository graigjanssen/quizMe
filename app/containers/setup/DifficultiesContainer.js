var React = require('react');
require('!style!css!sass!../../styles/main.scss');

var Difficulties = require('../../components/setup/Difficulties');

var DifficultiesContainer = React.createClass({
  handleClick: function(e){
    e.target.classList.toggle("selected");
  },
  render: function () {
    return (
      <Difficulties
      handleClick={this.handleClick}/>
    )
  }
});

module.exports = DifficultiesContainer;
