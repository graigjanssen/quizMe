var React = require('react');
require('!style!css!sass!../styles/main.scss');

var categoryHelpers = require('../helpers/categoryHelpers');
var utils = require('../helpers/utils');

var Setup = require('../components/setup/Setup');

var SetupContainer = React.createClass({
  getInitialState: function () {
    return {
      categories: [],
      difficulties: {
        easy: false,
        medium: false,
        hard: false
      }
    }
  },
  componentDidMount: function () {
    categoryHelpers.getAll().then(function(categories){
      this.setState({
        categories: categories
      })
    }.bind(this));
  },
  componentDidUpdate: function(){
    console.log(this.state.difficulties);
  },
  handleDifficultiesChange: function(e){
    utils.toggleSelected(e);
    var selected = e.target.classList.contains('selected');
    var difficulty = e.target.classList.item(1);
    this.setState(function(prevState){
      var prevDifficulties = prevState.difficulties;
      prevDifficulties[difficulty] = selected ? true : false;
      return {difficulties: prevDifficulties}
    });
  },
  handleCategoriesChange: function(e){
    utils.toggleSelected(e);
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
