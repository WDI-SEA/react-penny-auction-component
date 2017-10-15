import React, { Component } from 'react';
import Countdown from './Countdown'



class Auction extends Component {
    constructor(props) {
        super(props)
    var sale = {
        name: '$10 Shell Gift Card',
        img: '/img/$10 Shell Gift Card.jpg',
        price: 0,
        
    }   
    this.state = {
        item: sale.name,
        image: sale.img,
        price: (sale.price),
        intro: 10
    }
    //bind this for function
    this.addBid = this.addBid.bind(this);
    this.resetTimer = this.resetTimer(this);
}


    addBid(e) {
        e.preventDefault();
        this.setState({
            price: parseInt(this.state.price)+ 1,
        });
    }
    resetTimer(e) {
        this.setState({
            time: 10
        });
    }
    
    render() {
        return (
            <div>
                <img src={this.state.image} alt="deal"/>
                <Countdown start={this.state.intro} ms="1000"/>
                <p>{this.state.item}</p>
                <p>Current Price: $ {(this.state.price/100).toFixed(2)}</p>
                <button className="" onClick={this.addBid} >{this.state.intro >0 ? this.state.item : "cabbage"}</button>
            </div>
        )
    }
}

export default Auction;