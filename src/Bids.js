import React, {Component} from 'react';
import Layout from './Layout';

class Bids extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          title: "$10 Shell Gift Card",
          timeRemaining: "00:00:00",
          currentPrice: "$10.00",
          user: "stephanie",
          img: "/img/$10 Shell Gift Card.jpg"
        },
        {
          title: "$50 Walmart Gift Card",
          timeRemaining: "00:00:00",
          currentPrice: "$50.00",
          user: "stephanie",
          img: "/img/$50 Walmart Gift Card.jpg"
        },
        {
          title: "15 Voucher Bids",
          timeRemaining: "00:00:00",
          currentPrice: "$0.00",
          user: "stephanie",
          img: "/img/15 Voucher Bids.jpg"
        },
        {
          title: "250 Voucher Bids",
          timeRemaining: "00:00:00",
          currentPrice: "$0.00",
          user: "stephanie",
          img: "/img/250 Voucher Bids.jpg"
        },
        {
          title: "50 Voucher Bids",
          timeRemaining: "00:00:00",
          currentPrice: "$0.00",
          user: "stephanie",
          img: "/img/50 Voucher Bids.jpg"
        },
        {
          title: "Canon Pixma MG Series Wireless Printer",
          timeRemaining: "00:00:00",
          currentPrice: "$0.00",
          user: "stephanie",
          img: "/img/Canon Pixma MG Series Wireless Printer.jpg"
        },
        {
          title: "Cuisinart Convection Bread Maker",
          timeRemaining: "00:00:00",
          currentPrice: "$0.00",
          user: "stephanie",
          img: "/img/Cuisinart Convection Bread Maker.jpg"
        },
        {
          title: "Discrete 'Hide a Key' Sprinkler Head",
          timeRemaining: "00:00:00",
          currentPrice: "$0.00",
          user: "stephanie",
          img: "/img/Discrete 'Hide a Key' Sprinkler Head.jpg"
        },
        {
          title: "Ultra-Soft 1800 Series Sheet Set",
          timeRemaining: "00:00:00",
          currentPrice: "$0.00",
          user: "stephanie",
          img: "/img/Ultra-Soft 1800 Series Sheet Set.jpg"
        },
        {
          title: 'iPad Pro 9.7" 32GB WifFi',
          timeRemaining: "00:00:00",
          currentPrice: "$0.00",
          user: "stephanie",
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

getItems() {
  return this.state.items.map(item => {
    return(<Layout
      title={item.title}
      img={item.img}
      timeRemaining={item.timeRemaining}
      currentPrice={item.currentPrice}
      user={item.user} />
    );
  });
  }
}

export default Bids;
