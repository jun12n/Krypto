import React from "react";
import Item from "./Item";
import Operator from "./Operator";
import '../stylesheets/Result.css';

export default class Result extends React.Component{
  removeNumResult(){
    alert('Not yet...')
  }
  removeOperatorResult(){
    alert('Not yet...')
  }
  renderNumItem(i){
    return (
      <Item
        item={this.props.numResults[i]}
        onClick={() => this.removeNumResult(i)}
      />
    )
  }
  renderOperatorItem(i){
    return (
      <Operator
        item={this.props.operatorResults[i]}
        onClick={() => this.removeOperatorResult(i)}
      />
    )
  }
  render() {
    const resultClass = this.props.isCorrect? 'Correct': 'Incorrect';
    return(
      <div className="result">
        <div className="input_result">
          {this.renderNumItem(0)}
          {this.renderOperatorItem(0)}
          {this.renderNumItem(1)}
          {this.renderOperatorItem(1)}
          {this.renderNumItem(2)}
          {this.renderOperatorItem(2)}
          {this.renderNumItem(3)}
          {this.renderOperatorItem(3)}
          {this.renderNumItem(4)}
        </div>
        <div className="answer">
          <p>= {this.props.correctAnswer}</p>
        </div>
        <div className={resultClass}>
          <p className='correctMsg'>Correct</p>
        </div>
      </div>
    )
  }
}