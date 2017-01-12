var React = require('react');
require('!style!css!sass!../../styles/main.scss');
var Link = require('react-router').Link;

function Nav(props){
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link to="/setup"><i className="fa fa-file"></i> New</Link>
      </li>
      <li className="nav-item">
        <Link to="/add"><i className="fa fa-plus"></i> Add</Link>
      </li>
      <li className="nav-item">
        <Link to="/manage"><i className="fa fa-folder"></i> Manage</Link>
      </li>
    </ul>
  )
}

module.exports = Nav;
