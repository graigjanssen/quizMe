var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
require('!style!css!sass!../styles/main.scss');

function ConfirmAdd(props){
  return (
    <div className="confirm-add">
      <h1 className="section-heading">Success!</h1>
      <i className="fa fa-check-circle-o success-icon"></i>
      <h3 className="success-message space"><em>Your new question is now available to add to your next quiz.</em></h3>
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <Link to="/add">
            <button className="btn btn-lg btn-primary space">Add Another Question</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <Link to="/setup">
            <button className="btn btn-lg btn-info space">Create New Quiz</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

module.exports = ConfirmAdd;
