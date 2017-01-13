var React = require('react');
require('!style!css!sass!../../styles/main.scss');

function Difficulties(props) {
  return (
    <div className="difficulties">
      <h2 className="section-subheading text-left">Difficulty</h2>
      <div className="row">
        <div className="col-xs-4">Easy</div>
        <div className="col-xs-4">Medium</div>
        <div className="col-xs-4">Hard</div>
      </div>
    </div>
  )
};

module.exports = Difficulties;
