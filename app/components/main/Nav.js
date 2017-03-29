var React = require('react');
require('!style!css!sass!../../styles/main.scss');
var Link = require('react-router').Link;

function Nav(props){
  return (
    <div className="nav">
      <div className="col-xs-4 nav-item">
        <Link to="/setup"><i className="fa fa-file"></i> New</Link>
      </div>
      <div className="col-xs-4 nav-item">
        <Link to="/add"><i className="fa fa-plus"></i> Add</Link>
      </div>
    </div>
  )
}

module.exports = Nav;
