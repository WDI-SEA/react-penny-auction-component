import React, { Component } from 'react';
import './App.css';
import Item from './Item.js';

class Timer extends Component {
  constructor(){
    super();
    this.state = {
      seconds: 10
    };
    this.timer = 0;
    this.countDown = this.countDown.bind(this);
    if(this.timer === 0){
      this.timer = setInterval(this.countDown, 1000);
    }
  }
  countDown(){
    let seconds = this.state.seconds - 1;
    this.setState({
      seconds: seconds,
    });
    if(seconds === 0){
      clearInterval(this.timer);
    }
  }
  render() {
    return (
      <div className="App">
        <div> {this.state.seconds} </div>
        <div> Amount </div>
        <button>Bid!</button>
      </div>
    );
  }
}

export default Timer;
