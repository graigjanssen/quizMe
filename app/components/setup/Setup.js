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
    onDifficultiesChange: PropTypes.func.isRequired,
    onCategoriesChange: PropTypes.func.isRequired,
    onStartQuiz: PropTypes.func.isRequired
  },
  render: function () {
    return (
      <div className="setup">
        <h1 className="section-heading">Create New Quiz</h1>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <Difficulties
            onChange={this.props.onDifficultiesChange}/>
            <Categories
            categories={this.props.categories}
            difficulties={this.props.difficulties}
            onChange={this.props.onCategoriesChange}/>
          </div>
          <div className="col-xs-12 col-md-6 fixed-height">
            <ConfirmSetup
            selected={this.props.selected}
            onStartQuiz={this.props.onStartQuiz}/>
          </div>
        </div>
      </div>
    )
  }
})


module.exports = Setup;
