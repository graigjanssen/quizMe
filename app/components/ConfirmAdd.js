var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
require('!style!css!sass!../styles/main.scss');

function ConfirmAdd(props){
  return (
    <div className="confirm-add">
      <h1 className="section-heading">Success!</h1>
      <i className="fa fa-check-circle-o success-icon"></i>
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-sm-offset-4">
          <Link to="/add">
            <button className="btn btn-lg btn-primary space">Add Another Question</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-sm-offset-4">
          <Link to="/setup">
            <button className="btn btn-lg btn-info space">Create New Quiz</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

module.exports = ConfirmAdd;
