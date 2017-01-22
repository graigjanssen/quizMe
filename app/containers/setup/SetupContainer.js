var React = require('react');
require('!style!css!sass!../../styles/main.scss');

var categoryHelpers = require('../../helpers/categoryHelpers');

var Setup = require('../../components/setup/Setup');

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
  handleDifficultiesChange: function(e){
    console.log('Difficulty change detected');
    e.target.classList.toggle("selected");
  },
  handleCategoriesChange: function(e){
    console.log('Categories change detected');
    e.target.classList.toggle("selected");
  },
  render: function () {
    return (
      <Setup
      categories={this.state.categories}
      handleDifficultiesChange={this.handleDifficultiesChange}
      handleCategoriesChange={this.handleCategoriesChange}/>
    )
  }
});

module.exports = SetupContainer;
