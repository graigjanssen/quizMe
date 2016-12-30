var React = require('react');
require('!style!css!sass!../styles/main.scss');

function NavItem(props){
  return (
    <div className="col-xs-4">
      <li className="nav-item">{props.text}</li>
    </div>
  )
}

module.exports = NavItem;
