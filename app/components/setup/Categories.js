var React = require('react');
require('!style!css!sass!../../styles/main.scss');

var Category = require('../../modules/Category');

function Categories(props) {
  var categoryList = props.categories.map(function(category){
    var totalQuestions = category.difficulties.easy + category.difficulties.medium + category.difficulties.hard;
    return <Category
    name={category.name}
    totalQuestions={totalQuestions}
    onClick={props.handleChange}/>
  })
  return (
    <div className="categories">
      <h2 className="section-subheading text-left">Categories</h2>
      {categoryList}
    </div>
  )
}

module.exports = Categories;
