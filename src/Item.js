import React, { Component } from 'react';
import './App.css';
import App from './App.js';


class Item extends Component {
  constructor (props) {
    super(props)
    this.items = [
      {
        title: "$10 Shell Gift Card",
        src: "/img/$10 Shell Gift Card.jpg"
      },
      {
        title: "$50 Walmart Gift Card",
        src: "/img/$50 Walmart Gift Card.jpg"
      },
      {
        title: "15 Voucher Bids",
        src: "/img/15 Voucher Bids.jpg"
      },
      {
        title: "250 Voucher Bids",
        src: "/img/250 Voucher Bids.jpg"
      },
      {
        title: "50 Voucher Bids",
        src: "/img/50 Voucher Bids.jpg"
      },
      {
        title: "Canon Pixma MG Series Wireless Printer",
        src: "/img/Canon Pixma MG Series Wireless Printer.jpg"
      },
      {
        title: "Cuisinart Convection Bread Maker",
        src: "/img/Cuisinart Convection Bread Maker.jpg"
      },
      {
        title: "Discrete 'Hide a Key' Sprinkler Head",
        src: '/img/Discrete "Hide a Key" Sprinkler Head.jpg'
      },
      {
        title: "Ultra-Soft 1800 Series Sheet Set",
        src: "/img/Ultra-Soft 1800 Series Sheet Set.jpg"
      },
      {
        title: "iPad Pro 9.7 32GB WifFi ",
        src: '/img/iPad Pro 9.7" 32GB WifFi.jpg'
      }
    ]
    this.state = {
      itemArray: this.items
    }
  }
  render() {
    var mappedItems = this.state.itemArray.map(function(data, idx){
      return ([
        <div key={idx}>
          <h3 key={idx}> {data.title} </h3>
          <img alt=" " src={data.src}/>
          <div> Time </div>
          <div> Amount </div>
          <button>Bid!</button>
        </div>
      ])
    })
    return (
      <div className="App">
          {mappedItems}
      </div>
    );
  }
}

export default Item;
