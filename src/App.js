import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auctioncard from './components/auctioncard';


const auctions = [
  {
    itemName: "Walmart Gift Card",
    currentBid: {
      userId: "yaboy12",
      price: 1.03
    },
    bidExperation:'10/16/2017 10:55 AM',
    imageUrl: "/img/$50 Walmart Gift Card.jpg"
  },
  {
    itemName: "Canon Pixma MG Series Wireless Printer",
    currentBid: {
      userId: "dubz4life34",
      price: 2.53
    },
    bidExperation:'10/16/2017 10:55 AM',
    imageUrl: "/img/Canon Pixma MG Series Wireless Printer.jpg"
  }
]

class App extends Component {
  render() {
    const auctionz = auctions.map(auction =>{
    return(
      <Auctioncard 
      title={auction.itemName}
      imageUrl={auction.imageUrl}
      currentBid={auction.currentBid.price}
      userId={auction.currentBid.userId}
      bidExperation ={auction.bidExperation}
      key ={auction.itemName}
    />
    ) 
  })
    return (
      <div className="App">
        <div className="App-header">
          <h1> Penny Bids </h1>
        </div>

        <div>
          {auctionz}
          {/* passing in values as props so your able to reference them in the auctin card component  */}
        {/* <Auctioncard 
          title={ 'itemName'}
          imageUrl={'/img/$50 Walmart Gift Card.jpg'}
          currentBid={'price'}
          userId={'userId'}
          bidExperation = {'10/16/2017 10:55 AM'}
        /> */}
        </div>
      </div>
        /* </div> */
        /* <div>
          <p>$50 Walmart Gift Card.jpg</p>
          <img src="/img/$50 Walmart Gift Card.jpg" />
          <button type= "button" className= "btn btn-danger" >Bid Now </button>
        </div>
        <div>
          <p>15 Voucher Bids.jpg</p>
          <img src="/img/15 Voucher Bids.jpg" />
          <button type= "button" className= "btn btn-danger" >Bid Now </button>
        </div>
        <div>
          <p>250 Voucher Bids.jpg</p>
          <img src="/img/250 Voucher Bids.jpg" />
          <button type= "button" className= "btn btn-danger" >Bid Now </button>
        </div>
        <div>
          <p>50 Voucher Bids.jpg</p>
          <img src="/img/50 Voucher Bids.jpg" />
          <button type= "button" className= "btn btn-danger" >Bid Now </button>
        </div>
        <div>
          <p>Canon Pixma MG Series Wireless Printer.jpg</p>
          <img src="/img/Canon Pixma MG Series Wireless Printer.jpg" />
          <button type= "button" className= "btn btn-danger" >Bid Now </button>
        </div>
        <div>
          <p>Cuisinart Convection Bread Maker.jpg</p>
          <img src="/img/Cuisinart Convection Bread Maker.jpg" />
          <button type= "button" className= "btn btn-danger" >Bid Now </button>
        </div>
        <div>
          <p>Discrete "Hide a Key" Sprinkler Head.jpg</p>
          <img src='/img/Discrete "Hide a Key" Sprinkler Head.jpg' />
          <button type= "button" className= "btn btn-danger" >Bid Now </button>
        </div>
        <div>
          <p>Ultra-Soft 1800 Series Sheet Set.jpg</p>
          <img src="/img/Ultra-Soft 1800 Series Sheet Set.jpg" />
          <button type= "button" className= "btn btn-danger" >Bid Now </button>
        </div>
        <div>
          <p>iPad Pro 9.7" 32GB WifFi.jpg</p>
          <img src='/img/iPad Pro 9.7" 32GB WifFi.jpg' />
          <button type= "button" className= "btn btn-danger" >Bid Now </button>
        </div> */

      /* </div> */
    );
  }
}

export default App;
