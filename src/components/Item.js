import React from 'react';
import '../stylesheets/Item.css';

export default class Item extends React.Component{
  render() {
    return(
      <button
        className='Item'
        onClick={() => this.props.onClick()}>
        {this.props.item}
      </button>
    )
  }
}