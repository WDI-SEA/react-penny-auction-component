import React, { Component } from 'react';
import Moment from 'react-moment';
class Product extends Component {

  render() {
    let dateToFormat = '1976-04-19T12:59-0500';
    let bid = parseFloat(Math.round(this.props.currentBid * 100) / 100).toFixed(2);
    return (
      <div className="cell">
        <div className="header">
          <p>{this.props.name}</p>
        </div>
        <div className="body">
          <img src={this.props.image} alt={this.props.name} />
          <Moment date={dateToFormat} />
          <p>${bid}</p>
          <button onClick={() => {this.addPenny()}} className="bidder">Bid Now</button>
        </div>
      </div>
    );
  }

  addPenny() {
    this.props.addToBid(this.props.index);
  }

  timer() {

  }

  resetTimer() {

  }

}

export default Product;
