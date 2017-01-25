import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <div>
          <p>$10 Shell Gift Card.jpg</p>
          <img src="/img/$10 Shell Gift Card.jpg" />
        </div>
        <div>
          <p>$50 Walmart Gift Card.jpg</p>
          <img src="/img/$50 Walmart Gift Card.jpg" />
        </div>
        <div>
          <p>15 Voucher Bids.jpg</p>
          <img src="/img/15 Voucher Bids.jpg" />
        </div>
        <div>
          <p>250 Voucher Bids.jpg</p>
          <img src="/img/250 Voucher Bids.jpg" />
        </div>
        <div>
          <p>50 Voucher Bids.jpg</p>
          <img src="/img/50 Voucher Bids.jpg" />
        </div>
        <div>
          <p>Canon Pixma MG Series Wireless Printer.jpg</p>
          <img src="/img/Canon Pixma MG Series Wireless Printer.jpg" />
        </div>
        <div>
          <p>Cuisinart Convection Bread Maker.jpg</p>
          <img src="/img/Cuisinart Convection Bread Maker.jpg" />
        </div>
        <div>
          <p>Discrete "Hide a Key" Sprinkler Head.jpg</p>
          <img src='/img/Discrete "Hide a Key" Sprinkler Head.jpg' />
        </div>
        <div>
          <p>Ultra-Soft 1800 Series Sheet Set.jpg</p>
          <img src="/img/Ultra-Soft 1800 Series Sheet Set.jpg" />
        </div>
        <div>
          <p>iPad Pro 9.7" 32GB WifFi.jpg</p>
          <img src='/img/iPad Pro 9.7" 32GB WifFi.jpg' />
        </div>

      </div>
    );
  }
}

export default App;
