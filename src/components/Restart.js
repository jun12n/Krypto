import React from 'react';
// import Button from '@material-ui/core/Button';
import '../stylesheets/Restart.css';

export default class Table extends React.Component{
  render() {
    return(
      <button
        className='Restart'
        onClick={() => this.props.onClick()}
      >
        Restart Game
      </button>
    )
  }
}