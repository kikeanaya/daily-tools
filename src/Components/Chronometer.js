import React, { Component } from 'react';

  class Chrono extends Component {

    constructor(props) {
        super(props)

        this.state = { 
          startTS: null,
          diff: null,
          suspended: 0,
          interval: null
        }        
    }

  start = () => {
    if (this.state.startTS) {
      // prevent multi clicks on start
      return;
    }

    this.setState({
      startTS: +new Date() - this.state.suspended,
      interval: requestAnimationFrame(this.tick),
      suspended: 0
    });
  }

  stop = () => {
    cancelAnimationFrame(this.state.interval);
    this.setState({
      startTS: null,
      suspended: +this.state.diff
    });
  }

  reset = () => {
    cancelAnimationFrame(this.state.interval);
    this.setState({
      startTS: null,
      diff: null,
      suspended: 0,
      interval: null
    });
  }

  tick = () => {
    this.setState({
      diff: new Date(+new Date() - this.state.startTS),
      interval: requestAnimationFrame(this.tick)
    });
  }

  addZero = (n) => {
    return n < 10 ? '0' + n : n;
  }

  render(){

    let diff = this.state.diff;
    let hundredths = diff ? Math.round(this.state.diff.getMilliseconds()/10) : 0;
    let seconds = diff ? this.state.diff.getSeconds() : 0;
    let minutes = diff ? this.state.diff.getMinutes() : 0;

    if (hundredths === 100) hundredths = 0;

    return (
      <div className="chronometer">
        <div className="chrono-container">
          <p className="chrono-numbers">{this.addZero(minutes)}:{this.addZero(seconds)}:{this.addZero(hundredths)}</p>
          <div className="chrono-buttons">
            <button className="start-button" onClick={this.start}></button>
            <button className="stop-button" onClick={this.stop}></button>
            <button className="reset-button" onClick={this.reset}></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Chrono;