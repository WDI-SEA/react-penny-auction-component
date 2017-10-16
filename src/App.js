import React, { Component } from 'react';
import './App.css';
import Bid from './Bid.js'

class App extends Component {
  render() {
    var bid = <Bid data = '10' />
    return (
      <div className="App">
        <div className="App-header">
          <h2>QuiBids</h2>
        </div>
        <div id='content'>
          <div class='item'>
            <p class='name'>$10 Shell Gift Card</p>
            <img src="/img/$10 Shell Gift Card.jpg" />
            {bid}
          </div>
          <div class='item'>
            <p>$50 Walmart Gift Card.jpg</p>
            <img src="/img/$50 Walmart Gift Card.jpg" />
            {bid}
          </div>
          <div class='item'>
            <p>15 Voucher Bids</p>
            <img src="/img/15 Voucher Bids.jpg" />
            {bid}
          </div>
          <div class='item'>
            <p>250 Voucher Bids</p>
            <img src="/img/250 Voucher Bids.jpg" />
            {bid}
          </div>
          <div class='item'>
            <p>50 Voucher Bids</p>
            <img src="/img/50 Voucher Bids.jpg" />
            {bid}
          </div>
          <div class='item'>
            <p>Canon Pixma MG Series Wireless Printer</p>
            <img src="/img/Canon Pixma MG Series Wireless Printer.jpg" />
            {bid}
          </div>
          <div class='item'>
            <p>Cuisinart Convection Bread Maker</p>
            <img src="/img/Cuisinart Convection Bread Maker.jpg" />
            {bid}
          </div>
          <div class='item'>
            <p>Discrete "Hide a Key" Sprinkler Head</p>
            <img src='/img/Discrete "Hide a Key" Sprinkler Head.jpg' />
            {bid}
          </div>
          <div class='item'>
            <p>Ultra-Soft 1800 Series Sheet Set</p>
            <img src="/img/Ultra-Soft 1800 Series Sheet Set.jpg" />
            {bid}
          </div>
          <div class='item'>
            <p>iPad Pro 9.7" 32GB WifFi</p>
            <img src='/img/iPad Pro 9.7" 32GB WifFi.jpg' />
            {bid}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
