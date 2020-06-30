import React from 'react';
import '../stylesheets/Operator.css';

export default class Operator extends React.Component{
  render() {
    return(
      <button
        className='Operator'
        onClick={() => this.props.onClick()}>
        {this.props.item}
      </button>
    )
  }
}