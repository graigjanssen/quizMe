var React = require('react');
require('!style!css!sass!../../styles/main.scss');
var Link = require('react-router').Link;
var NavItem = require('../../modules/NavItem');

function Nav(props){
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link to="/setup">New</Link>
      </li>
      <li className="nav-item">
        <Link to="/add">Add</Link>
      </li>
      <li className="nav-item">
        <Link to="/manage">Manage</Link>
      </li>
    </ul>
  )
}

module.exports = Nav;
