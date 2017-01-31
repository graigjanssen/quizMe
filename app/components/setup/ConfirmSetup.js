var React = require('react');
require('!style!css!sass!../../styles/main.scss');

var ConfirmSetupItem = require('../../modules/ConfirmSetupItem');

function ConfirmSetup(props){
  return (
    <div className="confirm-setup">
      <h2 className="section-subheading">My Quiz</h2>
      <div className="col-xs-8"><h3>Category Name</h3></div>
      <div className="col-xs-4"><h3>Questions</h3></div>
      <ConfirmSetupItem/>
      <ConfirmSetupItem/>
      <ConfirmSetupItem/>
      <ConfirmSetupItem/>
    </div>
  )
}

module.exports = ConfirmSetup;
