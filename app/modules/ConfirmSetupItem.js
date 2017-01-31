var React = require('react');
require('!style!css!sass!../styles/main.scss');

function ConfirmSetupItem(props){
  return (
    <div className="confirm-setup-item">
      <div className="col-xs-8">Category</div>
      <div className="col-xs-4">#</div>
    </div>
  )
}

module.exports = ConfirmSetupItem;
