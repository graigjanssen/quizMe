var React = require('react');
var PropTypes = React.PropTypes;
require('!style!css!sass!../../styles/main.scss');

var Difficulties = require('./Difficulties');
var Categories = require('./Categories');
var ConfirmSetup = require('./ConfirmSetup');

var Setup = React.createClass({
  propTypes: {
    categories: PropTypes.array.isRequired,
    difficulties: PropTypes.object.isRequired,
    selected: PropTypes.object.isRequired,
    handleDifficultiesChange: PropTypes.func.isRequired,
    handleCategoriesChange: PropTypes.func.isRequired
  },
  render: function () {
    return (
      <div className="setup">
        <h1 className="section-heading">Create New Quiz</h1>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <Difficulties
            handleChange={this.props.handleDifficultiesChange}/>
            <Categories
            categories={this.props.categories}
            difficulties={this.props.difficulties}
            handleChange={this.props.handleCategoriesChange}/>
          </div>
          <div className="col-xs-12 col-md-6">
            <ConfirmSetup selected={this.props.selected}/>
          </div>
        </div>
      </div>
    )
  }
})


module.exports = Setup;
