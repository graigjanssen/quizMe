var React = require('react');
require('!style!css!sass!../../styles/main.scss');
var Link = require('react-router').Link;
var NavItem = require('../../modules/NavItem');

function Nav(props){
  return (
    <ul className="nav">
      <Link to="/setup">
        <li className="nav-item">New</li>
      </Link>
      <Link to="/add">
        <li className="nav-item">Add</li>
      </Link>
      <Link to="/manage">
        <li className="nav-item">Manage</li>
      </Link>
    </ul>
  )
}

module.exports = Nav;
