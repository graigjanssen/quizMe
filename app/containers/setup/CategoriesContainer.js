var React = require('react');
require('!style!css!sass!../../styles/main.scss');

var Categories = require('../../components/setup/Categories');

var CategoriesContainer = React.createClass({
  handleClick: function(e){
    e.target.classList.toggle("selected");
  },
  render: function () {
    return (
      <Categories
      categories={this.props.categories}
      handleClick={this.handleClick}
      />
    )
  }
});

module.exports = CategoriesContainer;
