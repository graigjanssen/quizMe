var React = require('react');
require('!style!css!sass!../styles/main.scss');

function Category(props){
  return (
    <div
    className="col-xs-12 col-md-6 category text-left"
    onClick={props.onClick}
    data-category-name={props.name}
    data-questions={props.totalQuestions}>
      {props.name} ({props.totalQuestions})
    </div>
  )
}

module.exports = Category;
