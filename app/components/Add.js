var React = require('react');
var PropTypes = React.PropTypes;
require('!style!css!sass!../styles/main.scss');
var Difficulty = require('../modules/Difficulty');

function DifficultySelect(props){
  var difficultyComponents = ['easy', 'medium', 'hard'].map(function(difficulty){
    return <Difficulty level={difficulty} onChange={props.handleDifficultySelect}/>
  });
  return (
    <div className="col-xs-12 col-sm-6 difficulties">
      <h2 className="subheading">Difficulty</h2>
      {difficultyComponents}
    </div>
  )
}
function Add(props){
  return (
    <div className="add">
      <h1 className="section-heading">Add New Question</h1>
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <h2 className="subheading">Category</h2>
          <select>
            <option value="create new">Create New</option>
            <option value="Category 1">Category 1</option>
            <option value="Category 2">Category 2</option>
            <option value="Category 3">Category 3</option>
            <option value="Category 4">Category 4</option>
            <option value="Category 5">Category 5</option>
          </select>
        </div>
        <DifficultySelect
        handleDifficultySelect={props.handleDifficultySelect}/>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <h2>Question Text</h2>
        </div>
      </div>
      <div className="row space">
        <div className="col-xs-12">
          <textarea rows="3" cols="36"></textarea>
        </div>
      </div>
      <div className="row space">
        <div className="col-xs-12">
          <h2>Answers</h2>
          <h4><em>Provide at least 2 answers and select the correct one</em></h4>
          <input className="add-radio" type="radio" name="correct"/>
          <input className="answer-input" type="text"/><br/>
          <input className="add-radio" type="radio" name="correct"/>
          <input className="answer-input" type="text"/><br/>
          <input className="add-radio" type="radio" name="correct"/>
          <input className="answer-input" type="text"/><br/>
          <input className="add-radio" type="radio" name="correct"/>
          <input className="answer-input" type="text"/><br/>
        </div>
      </div>
      <div className="row space">
        <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3">
          <button className="btn btn-lg btn-success space">Add <i className="fa fa-plus"></i></button>
        </div>
      </div>
    </div>
  )
}

Add.propTypes = {
  canSubmit: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
};


module.exports = Add;
