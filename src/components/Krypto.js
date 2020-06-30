import React from "react";
import Restart from './Restart';
import Result from "./Result";
import Reset from "./Reset";
import Operator from "./Operator";
import Item from "./Item";
import '../stylesheets/Krypto.css';
import '../stylesheets/Table.css';

export default class Krypto extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      items: this.setItems(),
      operators: ['+', '-', '×', '÷'],
      isSelected: Array(5).fill(false),
      numResults: Array(5).fill(null),
      operatorResults: Array(4).fill(null),
    };
  }
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  setItems(){
    const newItems = Array(6).fill(null);
    const allItems = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6,
                      7, 8, 9, 10, 7, 8, 9, 10, 7, 8, 9, 10,
                      11, 12, 13, 14, 15, 16, 17, 11, 12, 13, 14, 15, 16, 17,
                      18, 19, 20, 21, 22, 23, 24, 25]
    for(let i=0; i<6; i++){
      newItems[i] = allItems[this.getRandomInt(allItems.length, 1)];
    }
    return newItems;
  }
  handleRestartClick() {
    this.setState({
      items: this.setItems(),
      isSelected: Array(5).fill(false),
      numResults: Array(5).fill(null),
      operatorResults: Array(4).fill(null),
    });
  }
  handleResetClick() {
    this.setState({
      isSelected: Array(5).fill(false),
      numResults: Array(5).fill(null),
      operatorResults: Array(4).fill(null),
    });
  }
  setOperatorResult(i){
    for(let j=0; j<4; j++){
      if(this.state.operatorResults[j]===null){
        const operatorResults = this.state.operatorResults.slice();
        operatorResults[j] = this.state.operators[i];
        this.setState({ operatorResults: operatorResults });
        return;
      }
    }
  }
  setNumResult(i){
    if(this.state.isSelected[i]===false){
      for(let j=0; j<5; j++){
        if(this.state.numResults[j]===null){
          const numResults = this.state.numResults.slice();
          numResults[j] = this.state.items[i];
          const isSelected = this.state.isSelected.slice();
          isSelected[i] = true;
          this.setState({ numResults: numResults, isSelected: isSelected});
          return;
        }
      }
    }
  }
  renderOperatorItem(i){
    return (
      <Operator
        item={this.state.operators[i]}
        onClick={() => this.setOperatorResult(i)}
      />
    )
  }
  renderNumItem(i){
    return (
      <Item
        item={this.state.items[i]}
        onClick={() => this.setNumResult(i)}
      />
    )
  }

  render() {
    return(
      <div className='Krypto'>
        <Restart onClick={() => this.handleRestartClick()} />
        <Reset onClick={() => this.handleResetClick()}/>
        <div className='Table'>
          <div className='operator_items'>
            {this.renderOperatorItem(0)}
            {this.renderOperatorItem(1)}
            {this.renderOperatorItem(2)}
            {this.renderOperatorItem(3)}
          </div>
          <div className="num_items">
            {this.renderNumItem(0)}
            {this.renderNumItem(1)}
            {this.renderNumItem(2)}
            {this.renderNumItem(3)}
            {this.renderNumItem(4)}
          </div>
        </div>
        <Result
          operatorResults={this.state.operatorResults}
          numResults={this.state.numResults}
          answer={this.state.items[5]}/>
      </div>
    )
  }
}