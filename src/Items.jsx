import React, { Component } from 'react';
import './App.css';
import SingleItem from './SingleItem'

class Items extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          title: 'Shell Gift Card',
          price: 10,
          image: "/img/$10 Shell Gift Card.jpg",
        },
        {
          title: 'Walmart Gift Card',
          price: 50,
          image: "/img/$50 Walmart Gift Card.jpg",
        },
        {
          title: 'Voucher Bids',
          price: 15,
          image: "/img/15 Voucher Bids.jpg",
        },
        {
          title: 'Voucher Bids',
          price: 250,
          image: "/img/250 Voucher Bids.jpg",
        },
        {
          title: 'Voucher Bids',
          price: 50,
          image: "/img/50 Voucher Bids.jpg",
        },
        {
          title: 'Canon Pixma MG Series Wireless Printer',
          price: " ",
          image: "/img/Canon Pixma MG Series Wireless Printer.jpg",
        },
        {
          title: 'Cuisinart Convection Bread Maker',
          price: " ",
          image: "/img/Cuisinart Convection Bread Maker.jpg",
        },
        {
          title: 'Hide A Key',
          price: " ",
          image: '/img/Discrete "Hide a Key" Sprinkler Head.jpg',
        },
        {
          title: 'Ultra-Soft 1800 Series Sheet Set.jpg',
          price: " ",
          image: "/img/Ultra-Soft 1800 Series Sheet Set.jpg",
        },
        {
          title: 'iPad Pro 9.7 32GB WifFi.jpg',
          price: " ",
          image: '/img/iPad Pro 9.7" 32GB WifFi.jpg',
        },
      ]
    }
  }
  render() {
    return(
      <div className="container">
        {this.getItems()}
      </div>
    );
}

getItems() {
  return this.state.items.map(item =>
    <SingleItem
    title={item.title}
    price={item.price}
    image={item.image} />
  );
}

}
export default Items;
