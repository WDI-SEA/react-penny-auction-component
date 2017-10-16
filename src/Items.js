import React, { Component } from 'react';

class Items extends Component {
  render() {
    let dateToFormat = "1976-04-19T12:59-0500";
    let bid = parseFloat(Math.round(this.props.currentBid*100)/100).toFixed(2);

    return (
      <div className="holder">
        <p> {this.props.name} </p>
        <img src={this.props.image} alt={this.props.name} />
        <p> {this.props.timeLeft} </p>
        <p> ${bid} </p>
        <button onClick={() => {this.addPenny()}}>Bid Now! </button>
      </div>
    );
  }

  addPenny() {
    this.props.addBid(this.props.index);
    this.props.addToTimeLeft(this.props.index);
  }

  counddownTimer() {
    this.props.countdown(this.props.index);
  }
}

export default Items;
