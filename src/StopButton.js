import React, { Component } from 'react';

export default class StopButton extends Component {
  render () {
    return (
      <button onClick={this.props.onClick}>Stop</button>
    );
  }
}
