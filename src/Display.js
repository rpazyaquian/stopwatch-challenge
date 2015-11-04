import React, { Component } from 'react';

export default class Display extends Component {
  render () {
    var time = new Date(this.props.elapsedTime);
    var seconds = Math.floor((this.props.elapsedTime / 1000) % 60);
    var minutes = Math.floor(((this.props.elapsedTime / 1000) / 60) % 60);
    var hours = Math.floor((this.props.elapsedTime / 1000) / 3600);

    var secondsString = seconds >= 10 ? seconds.toString() : `0${seconds.toString()}`;
    var minutesString = minutes >= 10 ? minutes.toString() : `0${minutes.toString()}`;
    var hoursString = hours >= 10 ? hours.toString() : `0${hours.toString()}`;

    return (
      <div>
        {hoursString}:{minutesString}:{secondsString}
      </div>
    );
  }
}
