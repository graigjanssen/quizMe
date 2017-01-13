var React = require('react');
require('!style!css!sass!../../styles/main.scss');

var DifficultiesContainer = require('../../containers/setup/DifficultiesContainer');
var CategoriesContainer = require('../../containers/setup/CategoriesContainer');
var Category = require('../../modules/Category');

var Setup = React.createClass({
  render: function () {
    return (
      <div className="setup">
        <h1 className="section-heading">Create New Quiz</h1>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <DifficultiesContainer />
            <CategoriesContainer categories={this.props.categories}/>
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
