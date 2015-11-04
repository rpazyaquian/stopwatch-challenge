import React, { Component } from 'react';
import Display from './Display';
import StartButton from './StartButton';
import StopButton from './StopButton';
import ResetButton from './ResetButton';

export default class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: 0,
      previousTime: 0,
      timeInterval: null
    };
    this.start = this.start.bind(this);
    this.tick = this.tick.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  start () {
    if (this.state.timeInterval === null) {
      let currentTime = new Date().getTime();
      this.setState({previousTime: currentTime});
      let timeInterval = setInterval(this.tick, 50);
      this.setState({timeInterval: timeInterval});
    };
  }

  stop () {
    clearInterval(this.state.timeInterval);
    this.setState({timeInterval: null});
  }

  reset () {
    clearInterval(this.state.timeInterval);
    this.setState({
      elapsedTime: 0,
      previousTime: 0,
      timeInterval: null
    });
  }

  tick () {
    let currentTime = new Date().getTime();
    let timeDelta = currentTime - this.state.previousTime;
    this.setState({elapsedTime: this.state.elapsedTime + timeDelta});
    this.setState({previousTime: currentTime});
  }

  render () {
    return (
      <div>
        <h1>Stopwatch!</h1>
        <Display elapsedTime={this.state.elapsedTime}/>
        <StartButton onClick={this.start} />
        <StopButton onClick={this.stop} />
        <ResetButton onClick={this.reset}/>
      </div>
    );
  }
}
