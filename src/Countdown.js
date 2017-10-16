import React, { Component } from 'react';

class Countdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ticks: 10,
      price: 0
    }
    this.timer = 0;
    this.tick = this.tick.bind(this);
    if(this.timer === 0) {
      this.timer = setInterval(this.tick, 1000);
    }
  }
  tick(){
    const ticks = this.state.ticks - 1;
    this.setState({
      ticks: ticks
    });
    if(ticks === 0) {
      clearInterval(this.timer);
    }
  }
  bid(){
    const newPrice = this.state.price + 1;
    this.setState({
      price: newPrice,
      ticks: 10
    });
  }
  render(){
    let userBidder = null;
    if(this.state.price === 0) {
      userBidder = <div>No bids yet</div>
    } else {
      userBidder = <div>Farge the bidder</div>
    }
    if(this.state.ticks === 0 && this.state.price === 0){
      userBidder = <div>No one wants this garbage</div>
    }else if(this.state.ticks === 0 && this.state.price >= 1){
      userBidder = <div className ="animationText">Farge Won</div>
    }
    return(
      <div>
        <h1>{this.state.ticks}</h1>
        <h2>Current Price: ${(this.state.price/100).toFixed(2)}</h2>
        {userBidder}
        <button disable = {this.state.ticks === 0} onClick={(e) => this.bid(e)}>Bid Now</button>
      </div>
    );
  }
}

export default Countdown;
