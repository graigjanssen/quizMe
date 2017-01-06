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
      console.log(categories);
      this.setState({
        categories: categories
      })
    }.bind(this));
  },
  render: function () {
    return (
      <Setup/>
    )
  }
});

module.exports = SetupContainer;
