var React = require('react');
require('!style!css!sass!../styles/main.scss');
var Setup = React.createClass({
  render: function () {
    var categoryList = this.props.categories.map(function(category){
      return <li>Name: {category.name} Easy: {category.difficulties.E}</li>
    })
    return (
      <div className="setup">
        <h1 className="section-heading">Create New Quiz</h1>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <h2 className="section-subheading text-left">Difficulty</h2>
            <h2 className="section-subheading text-left">Categories</h2>
              <ul className="text-left">
                {categoryList}
              </ul>
          </div>
          <div className="col-xs-12 col-md-6">
            <h2 className="section-subheading">My Quiz</h2>
          </div>
        </div>
      </div>
    )
  }
})


module.exports = Setup;
