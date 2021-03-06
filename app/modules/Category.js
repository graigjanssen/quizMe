var React = require('react');
var PropTypes = React.PropTypes;
require('!style!css!sass!../styles/main.scss');

function Category(props){
  return (
    <div
    className={"col-xs-12 col-md-6 category text-left " + props.disableCategory}
    onClick={props.onClick}
    data-category-name={props.name}
    data-questions={props.totalQuestions}
    data-disabled={props.disableCategory}>
      {props.name} ({props.totalQuestions})
    </div>
  )
}

Category.propTypes = {
  name: PropTypes.string.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  disableCategory: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
}

module.exports = Category;
