var React = require('react');
var PropTypes = React.PropTypes;
require('!style!css!sass!../styles/main.scss');

function ConfirmSetupItem(props){
  return (
    <div className="confirm-setup-item">
      <div className="col-xs-8 text-left">{props.categoryName}</div>
      <div className="col-xs-4">{props.questions}</div>
    </div>
  )
}

ConfirmSetupItem.propTypes = {
  categoryName: PropTypes.string.isRequired,
  questions: PropTypes.number.isRequired
}

module.exports = ConfirmSetupItem;
