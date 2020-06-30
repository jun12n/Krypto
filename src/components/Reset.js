import React from 'react';
import '../stylesheets/Reset.css';

export default class Reset extends React.Component{
  render() {
    return(
      <button
        className='Reset'
        onClick={() => this.props.onClick()}
      >
        Reset Items
      </button>
    )
  }
}