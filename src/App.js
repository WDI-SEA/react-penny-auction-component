import React, { Component } from 'react';
import logo from './logo.svg';
import Items from "./Items";
import List from "./List";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          title: "Shell Gift Card",
          timeStart: Date.now(),
          timeLeft: "00:00",
          currentPrice: "$",
          img: "/img/$10 Shell Gift Card.jpg"
        },
        {
          title: "Walmart Gift Card",
          timeStart: Date.now(),
          timeLeft: "00:00",
          currentPrice: "$",
          img: "/img/$50 Walmart Gift Card.jpg"
        },
        {
          title: "15 Voucher Bids",
          timeStart: Date.now(),
          timeLeft: "00:00",
          currentPrice: "$0",
          img: "/img/15 Voucher Bids.jpg"
        },
        {
          title: "250 Voucher Bids",
          timeStart: Date.now(),
          timeLeft: "00:00",
          currentPrice: "$0",
          img: "/img/250 Voucher Bids.jpg"
        },
        {
          title: "50 Voucher Bids",
          timeStart: Date.now(),
          timeLeft: "00:00",
          currentPrice: "$0",
          img: "/img/50 Voucher Bids.jpg"
        },
        {
          title: "Canon Pixma MG Series Wireless Printer",
          timeStart: Date.now(),
          timeLeft: "00:00",
          currentPrice: "$0",
          img: "/img/Canon Pixma MG Series Wireless Printer.jpg"
        },
        {
          title: "Cuisinart Convection Bread Maker",
          timeStart: Date.now(),
          timeLeft: "00:00",
          currentPrice: "$0",
          img: "/img/Cuisinart Convection Bread Maker.jpg"
        },
        {
          title: 'Discrete "Hide a Key" Sprinkler Head',
          timeStart: Date.now(),
          timeLeft: "00:00",
          currentPrice: "$0",
          img: '/img/Discrete "Hide a Key" Sprinkler Head.jpg'
        },
        {
          title: "Ultra-Soft 1800 Series Sheet Set",
          timeStart: Date.now(),
          timeLeft: "00:00",
          currentPrice: "$0",
          img: "/img/Ultra-Soft 1800 Series Sheet Set.jpg"
        },
        {
          title: 'iPad Pro 9.7" 32GB WiFi',
          timeStart: Date.now(),
          timeLeft: "00:00",
          currentPrice: "$0",
          img: '/img/iPad Pro 9.7" 32GB WiFi.jpg'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <List items={this.state.items}
              addToBid={(itemIndex) => this.addToBid(itemIndex)}
              countdown={(itemIndex) => this.countdown(itemIndex)}
              addToTimeLeft={(itemIndex) => this.addToTimeLeft(itemIndex)} />
      </div>
    );
  }

  addToBid(itemIndex) {
    let items = this.state.items;
    items[itemIndex].currnetBid += 0.01;
    this.setState({items: items});
  }

  countdown(itemIndex) {
    let items = this.state.items;
    items[itemIndex].timeLeft -= 1;
    this.setState({items: items});
  }
}

export default App;
