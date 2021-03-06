var React = require('react');
var PropTypes = React.PropTypes;
require('!style!css!sass!../../styles/main.scss');

var Category = require('../../modules/Category');

var Categories = React.createClass({
  propTypes: {
    categories: PropTypes.array.isRequired,
    difficulties: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
  },
  render: function() {
    var onChange = this.props.onChange;
    // Create array of selected difficulties, changes with parent state
    var activeDifficulties = [];
    for (dif in this.props.difficulties){
      if (this.props.difficulties[dif]) {
        activeDifficulties.push(dif);
      }
    }
    // Create Category components with total questions available based on selected difficulties
    var categoryList = this.props.categories.map(function(category, index){
      var totalQuestions = 0;
      if (activeDifficulties.length){
        activeDifficulties.forEach(function(dif){
          totalQuestions += category.difficulties[dif];
        });
      } else {
        totalQuestions = category.difficulties.easy + category.difficulties.medium + category.difficulties.hard;
      }
      var disabled = totalQuestions === 0 ? "disabled" : "";
      return <Category
      key={index}
      name={category.name}
      totalQuestions={totalQuestions}
      disableCategory={disabled}
      onClick={onChange}/>
    })
    return (
      <div className="categories">
        <h2 className="section-subheading blue-bg text-left">Categories</h2>
        <div className="category-list">
          {categoryList}
        </div>
      </div>
    )
  }
})


module.exports = Categories;
