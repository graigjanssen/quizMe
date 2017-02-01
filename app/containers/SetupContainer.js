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
      },
      selected: {}
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
    utils.toggleSelected(e); // Toggle style
    var selected = e.target.classList.contains('selected');
    var difficulty = e.target.classList.item(1); // Depends on class list being in certain order
    this.setState(function(prevState){
      var prevDifficulties = prevState.difficulties;
      prevDifficulties[difficulty] = selected ? true : false;
      return {difficulties: prevDifficulties}
    });
    this.updateSelected();
  },
  handleCategoriesChange: function(e){
    utils.toggleSelected(e);
    var el = e.target;
    var selected = el.classList.contains('selected');
    // data attributes set using props.  getNamedItem method of NamedNodeMap
    var name = el.attributes.getNamedItem("data-category-name").value;
    var questions = parseInt(el.attributes.getNamedItem("data-questions").value, 10);

    this.setState(function(prevState){
      var prevSelected = prevState.selected;
      selected ? prevSelected[name] = questions : delete prevSelected[name]; // Set or remove category from state based on 'selected' state
      return {selected: prevSelected};
    })
  },
  updateSelected: function(){
    console.log('state ', this.state);
  },
  render: function () {
    return (
      <Setup
      categories={this.state.categories}
      difficulties={this.state.difficulties}
      handleDifficultiesChange={this.handleDifficultiesChange}
      handleCategoriesChange={this.handleCategoriesChange}/>
    )
  }
});

module.exports = SetupContainer;
