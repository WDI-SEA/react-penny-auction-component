import React, { Component } from 'react';
import './App.css';



class Bid extends Component {
  constructor(props){
    super(props);
    this.state = {
      bidders: props.users,
      price: props.price,
      bidderIndex: 0,
      timer: 10,
      newPrice: props.price
    }
  }
  changeBidder(){
    if (this.state.bidderIndex < 9) {
      let newIndex = this.state.bidderIndex + 1;
      this.setState({
        bidderIndex: newIndex
      })
    } else {
      this.setState({
        bidderIndex: 1
      })
    }
  }
  bidTimer() {
    let updateTime = this.state.timer - 1
    this.setState({
      timer: "0" + updateTime
    })
    if (this.state.timer === 0) {
      this.setState({
        timer: 10
      })
    }
  }
  addBid() {
    let updatedPrice = this.state.newPrice + .01
    this.setState({
      newPrice: updatedPrice
    })
  }
  placeBid(e){
    e.preventDefault();
    var counter;
    counter = setInterval(()=>{this.bidTimer()}, 1000);
    this.changeBidder();
    this.addBid();
    this.setState({
      timer: 10
    })
   }

  render(){
    return (
      <div>
        <p className="timer">00:00:{this.state.timer}</p>
        <p className="price">${this.state.newPrice.toFixed(2)}</p>
        <p className="bidder">{this.state.bidders[this.state.bidderIndex]}</p>
        <button type="button" className="btn btn-warning" onClick={(e) => this.placeBid(e)}>Place Bid</button>
      </div>
    )
  }
}


export default Bid;





// clearInterval(counter);
