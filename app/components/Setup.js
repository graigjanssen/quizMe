var React = require('react');
require('!style!css!sass!../styles/main.scss');

var Category = require('../modules/Category');

var Setup = React.createClass({
  render: function () {
    var handleClick = this.props.handleClick;
    var categoryList = this.props.categories.map(function(category){
      var totalQuestions = category.difficulties.E + category.difficulties.M + category.difficulties.H;
      return <Category
      name={category.name}
      totalQuestions={totalQuestions}
      handleClick={handleClick}/>
    })
    return (
      <div className="setup">
        <h1 className="section-heading">Create New Quiz</h1>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <h2 className="section-subheading text-left">Difficulty</h2>
            <h2 className="section-subheading text-left">Categories</h2>
              <div className="row">
                {categoryList}
              </div>
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
