import React, { Component } from 'react';
import './App.css';

// let bidTimer;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      bidders: props.users,
      itemsArr: props.items,
      price: props.items[0].price,
      bidderIndex: 0,
      timer: 10,
      newPrice: props.items[0].price
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
        bidderIndex: 0
      })
    }
  }
  bidTimer() {
    let updateTime = this.state.timer - 1
    this.setState({
      timer: updateTime
    })
    if (this.state.timer <= 0){
      clearInterval();
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
    setInterval(function(){
      this.bidTimer()}, 1000);
    this.changeBidder();
    this.addBid();
  }


  render() {
    return (
      <div className="container">
        <h3>{this.state.itemsArr[0].title}</h3>
        <img alt="item" src={this.state.itemsArr[0].image}/>
        <p className="timer">00:00:{this.state.timer}</p>
        <p className="price">${this.state.newPrice.toFixed(2)}</p>
        <p className="bidder">{this.state.bidders[this.state.bidderIndex]}</p>
        <button onClick={(e) => this.placeBid(e)}>Bid!</button>
      </div>
    );
  }
}








export default App;
