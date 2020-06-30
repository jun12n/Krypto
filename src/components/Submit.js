import React from "react";
import '../stylesheets/BaseButton.css'

export default class Submit extends React.Component {
  render() {
    return (
      <button
        className='Submit BaseButton'
        onClick={() => this.props.onClick()}
      >
        Krypto!!
      </button>
    )
  }
}