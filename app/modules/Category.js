var React = require('react');
require('!style!css!sass!../styles/main.scss');

function Category(props){
  return (
    <div className="col-xs-12 col-md-6 category text-left" onClick={props.onClick}>
      {props.name} ({props.totalQuestions})
    </div>
  )
}

module.exports = Category;
