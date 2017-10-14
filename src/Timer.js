import React, { Component } from 'react';
import './App.css';
import Item from './Item.js';

class Timer extends Component {
  constructor(){
    super();
    this.state = {
      seconds: 10,
      amount: 0
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
  bid(){
    let newAmount = this.state.amount + 1;
    this.setState({
      amount: newAmount,
      seconds: 10
    })
  }
  render() {
    let userBidder = null;
    if(this.state.amount === 0){
      userBidder = <div>Nobody has bid yet!</div>
    }else{
      userBidder = <div>Farge bid!</div>
    }
    return (
      <div className="App">
        <div> {this.state.seconds} </div>
        <div> ${this.state.amount} </div>
        <div> {userBidder}</div>
        <button disabled={this.state.seconds === 0} onClick={(e) => this.bid(e)}>Bid Now!</button>
      </div>
    );
  }
}

export default Timer;
