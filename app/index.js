var React = require('react');
var ReactDOM = require('react-dom');
require('!style!css!sass!./styles/main.scss');

var HelloWorld = React.createClass({
  render: function () {
    return (
      <h1 className="text-center lead test-class">Hello World!</h1>
    )
  }
});

ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('app')
)
