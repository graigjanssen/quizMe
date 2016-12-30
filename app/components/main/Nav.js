var React = require('react');
require('!style!css!sass!../../styles/main.scss');
var Link = require('react-router').Link;
var NavItem = require('../../modules/NavItem');

function Nav(props){
  return (
    <ul className="nav">
      <Link to="/setup">
        <NavItem text="New"/>
      </Link>
      <Link to="/add">
        <NavItem text="Add"/>
      </Link>
      <Link to="/manage">
        <NavItem text="Manage"/>
      </Link>
    </ul>
  )
}

module.exports = Nav;
