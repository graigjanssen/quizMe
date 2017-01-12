var React = require('react');
require('!style!css!sass!../styles/main.scss');

var categoryHelpers = require('../helpers/categoryHelpers');

var Setup = require('../components/Setup');

var SetupContainer = React.createClass({
  getInitialState: function () {
    return {
      categories: []
    }
  },
  componentDidMount: function () {
    categoryHelpers.getAll().then(function(categories){
      this.setState({
        categories: categories
      })
    }.bind(this));
  },
  categoryToggle: function(e){
    e.target.classList.toggle("selected");
    console.log(e.target.classList);
  },
  render: function () {
    return (
      <Setup
      categories={this.state.categories}
      handleClick={this.categoryToggle}/>
    )
  }
});

module.exports = SetupContainer;
