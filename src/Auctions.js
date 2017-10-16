import React, {Component} from 'react';
import Auction from './Auction';

class Auctions extends Component {
  constructor(props) {
    super();
    this.state = {
      currentAuctions: [
        {
          title: '$10 Shell Gift Card',
          img: '/img/$10 Shell Gift Card.jpg'
        },
        {
          title: '$50 Walmart Gift Card',
          img: '/img/$50 Walmart Gift Card.jpg'
        },
        {
          title: '15 Voucher Bids',
          img: '/img/15 Voucher Bids.jpg'
        },
        {
          title: '250 Voucher Bids',
          img: '/img/250 Voucher Bids.jpg'
        },
        {
          title: '50 Voucher Bids',
          img: '/img/50 Voucher Bids.jpg'
        },
        {
          title: 'Canon Pixma MG Series Wireless Printer',
          img: '/img/Canon Pixma MG Series Wireless Printer.jpg'
        },
        {
          title: 'Cuisinart Convection Bread Maker',
          img: '/img/Cuisinart Convection Bread Maker.jpg'
        },
        {
          title: 'Discrete "Hide a Key" Sprinkler Head',
          img: '/img/Discrete "Hide a Key" Sprinkler Head.jpg'
        },
        {
          title: 'Ultra-Soft 1800 Series Sheet Set',
          img: '/img/Ultra-Soft 1800 Series Sheet Set.jpg'
        },
        {
          title: 'iPad Pro 9.7" 32GB WifFi',
          img: '/img/iPad Pro 9.7" 32GB WifFi.jpg'
        },
      ]
    }
  }
  render() {
    let auctions = this.state.currentAuctions.map(
      (item, index) => (
        <Auction auctions={item} key={index} />
      )
    )
    return (
      <div>
        {auctions}
      </div>
    )
  }
}

export default Auctions
