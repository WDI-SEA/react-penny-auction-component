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
    let newAmount = this.state.amount + .01;
    newAmount = Math.round( newAmount * 100 + Number.EPSILON ) / 100
    this.setState({
      amount: newAmount,
      seconds: 10
    })
  }
  animationClass(){
    let classname = "animation"
    if(this.state.seconds === 0){
      classname += "none"
    }
    return classname;
  }
  bidColor(){
    let classname = ""
    if(this.state.amount >= .01){
      classname+= "green"
    }
    return classname;
  }
  render() {
    let userBidder = null;
    if(this.state.amount === 0){
      userBidder = <div>Nobody has bid yet!</div>
    }else{
      userBidder = <div>Farge bid!</div>
    }
    if(this.state.seconds === 0 && this.state.amount === 0){
      userBidder = <div> Nobody bid on this item </div>
    }else if(this.state.seconds === 0 && this.state.amount >= .01){
      userBidder= <div className="animationText"> Farge won! </div>
    }
    let fullTimer = null;
    if(this.state.seconds === 10){
      fullTimer = <div>00:00:{this.state.seconds} </div>
    }else{
      fullTimer = <div>00:00:0{this.state.seconds} </div>
    }
    return (
      <div className="Bidder">
        <div> {fullTimer} </div>
        <div className={this.bidColor()}> ${this.state.amount} </div>
        <div> {userBidder}</div>
        <button className={this.animationClass()} disabled={this.state.seconds === 0} onClick={(e) => this.bid(e)}>Bid Now!</button>
      </div>
    );
  }
}

export default Timer;
