import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ProductListings from './productListings';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        { name: '$10 Shell Gift Card',
          image: "/img/$10 Shell Gift Card.jpg",
          timeStart: Date.now(),
          timeLeft: 24,
          currentBid: 0.00 },
        { name: '$50 Walmart Gift Card',
          image: "/img/$50 Walmart Gift Card.jpg",
          timeStart: Date.now(),
          timeLeft: 24,
          currentBid: 0.00 },
        { name: '15 Voucher Bids',
          image: "/img/15 Voucher Bids.jpg",
          timeStart: Date.now(),
          timeLeft: 24,
          currentBid: 0.00 },
        { name: '250 Voucher Bids',
          image: "/img/250 Voucher Bids.jpg",
          timeStart: Date.now(),
          timeLeft: 24,
          currentBid: 0.00 },
        { name: '50 Voucher Bids',
          image: "/img/50 Voucher Bids.jpg",
          timeStart: Date.now(),
          timeLeft: 24,
          currentBid: 0.00 },
        { name: 'Canon Pixma MG Series Wireless Printer',
          image: "/img/Canon Pixma MG Series Wireless Printer.jpg",
          timeStart: Date.now(),
          timeLeft: 24,
          currentBid: 0.00 },
        { name: 'Cuisinart Convection Bread Maker',
          image: "/img/Cuisinart Convection Bread Maker.jpg",
          timeStart: Date.now(),
          timeLeft: 24,
          currentBid: 0.00 },
        { name: 'Discrete "Hide a Key" Sprinkler Head',
          image: '/img/Discrete "Hide a Key" Sprinkler Head.jpg',
          timeStart: Date.now(),
          timeLeft: 24,
          currentBid: 0.00 },
        { name: 'Ultra-Soft 1800 Series Sheet Set',
          image: "/img/Ultra-Soft 1800 Series Sheet Set.jpg",
          timeStart: Date.now(),
          timeLeft: 24,
          currentBid: 0.00 },
        { name: 'iPad Pro 9.7" 32GB WifFi',
          image: '/img/iPad Pro 9.7" 32GB WifFi.jpg',
          timeStart: Date.now(),
          timeLeft: 24,
          currentBid: 0.00 }
      ]
    }
  }

  render() {
    return (
      <div className="App container">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React... Bids?</h2>
        </div>

        <ProductListings products={this.state.products}
                        addToBid={(productIndex) => this.addToBid(productIndex)}
                        countdownTimer={(productIndex) => this.countdownTimer(productIndex)}  />

      </div>
    );
  }

  addToBid(productIndex) {
    let products = this.state.products;
    products[productIndex].currentBid += 0.01;
    this.setState({products: products});
  }

  countdownTimer(productIndex) {

  }

}

export default App;
