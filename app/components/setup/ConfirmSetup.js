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
      <h2 className="section-subheading">My Quiz</h2>
      <div className="col-xs-8"><h3>Category Name</h3></div>
      <div className="col-xs-4"><h3>Questions</h3></div>
      {selectedCategoriesList}
    </div>
  )
}

ConfirmSetup.propTypes = {
  selected: PropTypes.object.isRequired
}

module.exports = ConfirmSetup;
