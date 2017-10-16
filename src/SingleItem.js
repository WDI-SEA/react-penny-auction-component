import React, { Component } from 'react';
import Countdown from './Countdown';
import Auction from './Auction';

class SingleItem extends Component {
  constructor(props) {
    super(props)
      this.addBid = this.addBid.bind(this);
  }
  addBid(e) {
    e.preventDefault();
    this.setState({
      price: parseInt(this.state.price) + 1
    });
  }
  render() {
    return(
      <div className ="container">
        <Countdown start="10" ms="1000"/>
        <div> {this.props.title} </div>
        <div> Current Price: {(this.props.price).toFixed(2)}</div>
        <div> Price: {this.props.price} </div>
        <div><img src={this.props.image}/></div>
        <button onClick={this.addBid}>Add Bid</button>
      </div>
    );
  }
}

export default SingleItem;