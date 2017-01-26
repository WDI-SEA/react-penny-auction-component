import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';


class BidList extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Penny Auction</h2>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-3">
              <p>$10 Shell Gift Card.jpg</p>
              <img src="/img/$10 Shell Gift Card.jpg" />
            </div>
            <div className="col-xs-3">
              <p>$50 Walmart Gift Card.jpg</p>
              <img src="/img/$50 Walmart Gift Card.jpg" />
            </div>
            <div className="col-xs-3">
              <p>15 Voucher Bids.jpg</p>
              <img src="/img/15 Voucher Bids.jpg" />
            </div>
            <div className="col-xs-3">
              <p>250 Voucher Bids.jpg</p>
              <img src="/img/250 Voucher Bids.jpg" />
            </div>
          </div>

          <div className="row">
            <div className="col-xs-3">
              <p>50 Voucher Bids.jpg</p>
              <img src="/img/50 Voucher Bids.jpg" />
            </div>
            <div className="col-xs-3">
              <p>Canon Pixma MG Series Wireless Printer.jpg</p>
              <img src="/img/Canon Pixma MG Series Wireless Printer.jpg" />
            </div>
            <div className="col-xs-3">
              <p>Cuisinart Convection Bread Maker.jpg</p>
              <img src="/img/Cuisinart Convection Bread Maker.jpg" />
            </div>
            <div className="col-xs-3">
              <p>Discrete "Hide a Key" Sprinkler Head.jpg</p>
              <img src='/img/Discrete "Hide a Key" Sprinkler Head.jpg' />
            </div>
          </div>

          <div className="row">
            <div className="col-xs-3">
              <p>Ultra-Soft 1800 Series Sheet Set.jpg</p>
              <img src="/img/Ultra-Soft 1800 Series Sheet Set.jpg" />
            </div>
            <div className="col-xs-3">
              <p>iPad Pro 9.7" 32GB WifFi.jpg</p>
              <img src='/img/iPad Pro 9.7" 32GB WifFi.jpg' />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default BidList;
