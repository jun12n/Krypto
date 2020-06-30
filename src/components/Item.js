import React from 'react';
import '../stylesheets/Item.css';

export default class Item extends React.Component{
  render() {
    const selectedClass = this.props.isSelected? 'selectedItem': '';
    return(
      <button
        id='Item'
        className={selectedClass}
        onClick={() => this.props.onClick()}>
        {this.props.item}
      </button>
    )
  }
}