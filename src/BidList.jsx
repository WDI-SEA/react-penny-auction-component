import React, { Component } from 'react';
import Template from './Template';


class BidList extends Component {
  constructor(props) {
    super(props);

    this.state ={
      items: [
        {
          title: "Shell Gift Card",
          timeLeft: "00:00:00",
          currentPrice: "$10.00",
          user: "chris",
          img: "/img/$10 Shell Gift Card.jpg"
        },
        {
          title: "Walmart Gift Card",
          timeLeft: "00:00:00",
          currentPrice: "$50.00",
          user: "chris",
          img: "/img/$50 Walmart Gift Card.jpg"
        },
        {
          title: "15 Voucher Bids",
          timeLeft: "00:00:00",
          currentPrice: "$0.00",
          user: "chris",
          img: "/img/15 Voucher Bids.jpg"
        },
        {
          title: "250 Voucher Bids",
          timeLeft: "00:00:00",
          currentPrice: "$0.00",
          user: "chris",
          img: "/img/250 Voucher Bids.jpg"
        },
        {
          title: "50 Voucher Bids",
          timeLeft: "00:00:00",
          currentPrice: "$0.00",
          user: "chris",
          img: "/img/50 Voucher Bids.jpg"
        },
        {
          title: "Canon Pixma MG Series Wireless Printer",
          timeLeft: "00:00:00",
          currentPrice: "$0.00",
          user: "chris",
          img: "/img/Canon Pixma MG Series Wireless Printer.jpg"
        },
        {
          title: "Cuisinart Convection Bread Maker",
          timeLeft: "00:00:00",
          currentPrice: "$0.00",
          user: "chris",
          img: "/img/Cuisinart Convection Bread Maker.jpg"
        },
        {
          title: 'Discrete "Hide a Key" Sprinkler Head',
          timeLeft: "00:00:00",
          currentPrice: "$0.00",
          user: "chris",
          img: '/img/Discrete "Hide a Key" Sprinkler Head.jpg'
        },
        {
          title: 'Ultra-Soft 1800 Series Sheet Set',
          timeLeft: "00:00:00",
          currentPrice: "$0.00",
          user: "chris",
          img: '/img/Ultra-Soft 1800 Series Sheet Set.jpg'
        },
        {
          title: 'iPad Pro 9.7" 32GB WifFi',
          timeLeft: "00:00:00",
          currentPrice: "$0.00",
          user: "chris",
          img: '/img/iPad Pro 9.7" 32GB WifFi.jpg'
        }
      ]
    }
  }

  render() {
    return(
      <div>
      {this.getItems()}
      </div>
    );
  }

  getItems(){
    return this.state.items.map(item => {
      return (<Template
        title={item.title}
        img={item.img}
        timeLeft={item.timeLeft}
        currentPrice={item.currentPrice}
        user={item.user} />
      );
    });
  }

}

export default BidList;
