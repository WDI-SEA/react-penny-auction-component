import React, { Component } from 'react';
import Timer from './Timer.js';
import './App.css';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = ({
        //not using these all now but may later?
        item: props.item.item,
        link: props.item.link,
        secondsLeft: props.item.secondsLeft,
        currentPrice: props.item.currentPrice,
        currentHighBidder: props.item.currentHighBidder,
        parentKey: props.parentKey
    })
  }

  //updates state
  //affects price and bidder values that render
  //triggers a change in componentWillReceiveProps in timer
  handleClick(e,index){
    e.preventDefault();
    let updateItem = this.state;
    updateItem.currentPrice+=1;
    updateItem.currentHighBidder = 'Link';
    this.setState({
      updateItem
    })
  }

  render() {
      return (
            <div className="componentWrapper">
                <h3>{this.state.item}</h3>
                <img src={`img/${this.state.link}`} alt="" />
                <div className="itemInfo">
                    <p>High Bid: {this.state.currentPrice} x {<img src="img/rupee.png" alt=""/>}</p>
                </div>
                <div className="itemInfo"><p>Bidder: {this.state.currentHighBidder}</p></div>
                <div className="itemInfo">
                  <p>Timer: <Timer secondsLeft={this.state.currentPrice} key={this.state.index}/></p>
                </div>
                <button onClick={(e) => this.handleClick(e)}>
                  {<img src="img/rupee.png" alt=""/>} <div>+ 1</div>
                </button>
            </div>
    );
  }
}

export default Items;
