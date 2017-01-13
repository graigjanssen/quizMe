var React = require('react');
require('!style!css!sass!../../styles/main.scss');

var Category = require('../../modules/Category');

function Categories(props) {
  var categoryList = props.categories.map(function(category){
    var totalQuestions = category.difficulties.E + category.difficulties.M + category.difficulties.H;
    return <Category
    name={category.name}
    totalQuestions={totalQuestions}
    onClick={props.handleClick}/>
  })
  return (
    <div className="categories">
      <h2 className="section-subheading text-left">Categories</h2>
      {categoryList}
    </div>
  )
}

module.exports = Categories;
