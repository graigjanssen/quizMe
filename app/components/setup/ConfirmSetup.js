var React = require('react');
var PropTypes = React.PropTypes;
require('!style!css!sass!../../styles/main.scss');

var ConfirmSetupItem = require('../../modules/ConfirmSetupItem');

function ConfirmSetup(props){
  var selectedCategoriesList = [], i = 0;
  for (category in props.selected) {
    var listItem = <ConfirmSetupItem
    categoryName={category}
    questions={props.selected[category]}
    key={i}/>
    selectedCategoriesList.push(listItem);
    i++;
  }
  return (
    <div className="confirm-setup">
      <div className="row">
        <h2 className="col-xs-12 section-subheading">My Quiz</h2>
      </div>
      <div className="row">
        <div className="col-xs-8 text-left"><h3>Category Name</h3></div>
        <div className="col-xs-4"><h3>Questions</h3></div>
      </div>
      <div className="categories">
        {selectedCategoriesList}
      </div>
      <div className="col-xs-12 btn-container">
        <button
          className="btn btn-lg btn-success"
          onClick={props.onStartQuiz}
          disabled={props.disableSubmit}>Start Quiz</button>
      </div>
    </div>
  )
}

ConfirmSetup.propTypes = {
  selected: PropTypes.object.isRequired,
  onStartQuiz: PropTypes.func.isRequired
}

module.exports = ConfirmSetup;
