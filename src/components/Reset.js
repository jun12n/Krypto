import React from 'react';
import '../stylesheets/Reset.css';
import '../stylesheets/BaseButton.css';

export default class Reset extends React.Component{
  render() {
    return(
      <button
        className='Reset BaseButton'
        onClick={() => this.props.onClick()}
      >
        Reset Items
      </button>
    )
  }
}