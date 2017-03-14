var React = require('react');
var PropTypes = React.PropTypes;
require('!style!css!sass!../styles/main.scss');
var Difficulty = require('../modules/Difficulty');

// Creates 3 Difficulty components, returns array of components, behave like radio button
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
// Creates answer field with "radio button"
function AnswerInput(props){
  return (
    <div className="answer-input-wrapper col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
      <span
      className="answer-input-select fa fa-circle-o"
      data-slot={props.slot}
      onClick={props.handleAnswerSelect}></span>
      <input
      className="answer-input"
      type="text"
      data-slot={props.slot}
      onChange={props.handleAnswerInput}/>
    </div>
  )
}

function Add(props){
  // Create 4 answer fields, each with slot number
  var answerInputs = [];
  for (var i=0; i < 4; i++){
    answerInputs.push(
      <AnswerInput
      key={i}
      slot={i}
      handleAnswerSelect={props.handleAnswerSelect}
      handleAnswerInput={props.handleAnswerInput}/>
    );
  };
  return (
    <div className="add">
      <h1 className="section-heading">Add New Question</h1>
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <h2 className="subheading">Category</h2>
          <input type="text"
          onChange={props.handleCategoryInput}/>
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
          <textarea rows="3" cols="36" onChange={props.handleQuestionInput}></textarea>
        </div>
      </div>
      <div className="row space">
        <div className="answer-inputs col-xs-12 col-sm-6 col-sm-offset-3">
          <h2>Answers</h2>
          <h4><em>Provide at least 2 answers and select the correct one</em></h4>
          {answerInputs}
        </div>
      </div>
      <div className="row space">
        <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3">
          <button className="btn btn-lg btn-success space" disabled={!props.canSubmit}>Add <i className="fa fa-plus"></i></button>
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
