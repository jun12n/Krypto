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
  calculateResult(numbers, operators){
    const num_vals = numbers.slice();
    const ope_vals = operators.slice();
    if(!num_vals.includes(null) && !ope_vals.includes(null)){
      while (ope_vals.includes('÷')||ope_vals.includes('×')) {
        for (let i = 0; i < ope_vals.length; i++) {
          if (ope_vals[i] === '÷' || ope_vals[i] === '×') {
            if (ope_vals[i] === '×') {
              num_vals[i] = num_vals[i] * num_vals[i + 1]
              num_vals.splice(i + 1, 1);
              ope_vals.splice(i, 1);
            } else if (ope_vals[i] === '÷') {
              num_vals[i] = num_vals[i] / num_vals[i + 1]
              num_vals.splice(i + 1, 1);
              ope_vals.splice(i, 1);
            }
          }
          console.log(num_vals);
        }
      }
      while (ope_vals.includes('+')||ope_vals.includes('-')) {
        for (let i = 0; i < ope_vals.length; i++) {
          if (ope_vals[i] === '+') {
            num_vals[i] = num_vals[i] + num_vals[i + 1]
            num_vals.splice(i + 1, 1);
            ope_vals.splice(i, 1);
          } else if (ope_vals[i] === '-') {
            num_vals[i] = num_vals[i] - num_vals[i + 1]
            num_vals.splice(i + 1, 1);
            ope_vals.splice(i, 1);
          }
          console.log(num_vals);
        }
      }
      return num_vals[0]
    }


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
          <p>= {this.props.answer}</p>
        </div>
        <div>
          {this.calculateResult(this.props.numResults, this.props.operatorResults)}
        </div>
      </div>
    )
  }
}