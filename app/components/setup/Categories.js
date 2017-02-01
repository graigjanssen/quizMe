var React = require('react');
require('!style!css!sass!../../styles/main.scss');

var Category = require('../../modules/Category');

var Categories = React.createClass({
  render: function() {
    var handleChange = this.props.handleChange;
    // Create array of selected difficulties, changes with parent state
    var activeDifficulties = [];
    for (dif in this.props.difficulties){
      if (this.props.difficulties[dif]) {
        activeDifficulties.push(dif);
      }
    }
    // Create Category components with total questions available based on selected difficulties
    var categoryList = this.props.categories.map(function(category){
      var totalQuestions = 0;
      if (activeDifficulties.length){
        activeDifficulties.forEach(function(dif){
          totalQuestions += category.difficulties[dif];
        });
      } else {
        totalQuestions = category.difficulties.easy + category.difficulties.medium + category.difficulties.hard;
      }

      return <Category
      name={category.name}
      totalQuestions={totalQuestions}
      onClick={handleChange}/>
    })
    return (
      <div className="categories">
        <h2 className="section-subheading text-left">Categories</h2>
        {categoryList}
      </div>
    )
  }
})


module.exports = Categories;
