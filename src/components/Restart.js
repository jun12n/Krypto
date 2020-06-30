import React from 'react';
// import Button from '@material-ui/core/Button';
import '../stylesheets/Restart.css';
import '../stylesheets/BaseButton.css';

export default class Table extends React.Component{
  render() {
    return(
      <button
        className='Restart BaseButton'
        onClick={() => this.props.onClick()}
      >
        Restart Game
      </button>
    )
  }
}