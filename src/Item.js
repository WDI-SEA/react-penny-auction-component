import React, { Component } from 'react';
import Countdown from './count';
import './App.css';





export default class Item extends Component {
    constructor(props){
      super(props)
      this.items = [
        {
            name:"$10 Shell Gift Card.jpg",
            img:"/img/$10 Shell Gift Card.jpg"
        },
        {
            name:"$50 Walmart Gift Card.jpg",
            img:"/img/$50 Walmart Gift Card.jpg"
        },
        {
            name:"15 Voucher Bids.jpg",
            img:"/img/15 Voucher Bids.jpg"
        },
        {
            name:"250 Voucher Bids.jpg",
            img:"/img/250 Voucher Bids.jpg"
        },
        {
            name:"50 Voucher Bids.jpg",
            img:"/img/50 Voucher Bids.jpg"
        },
        {
            name:"Canon Pixma MG Series Wireless Printer.jpg",
            img:  "/img/Canon Pixma MG Series Wireless Printer.jpg"
        },
        {
            name:"Cuisinart Convection Bread Maker.jpg",
            img: "/img/Cuisinart Convection Bread Maker.jpg"
        },
        {
            name:"Discrete 'Hide a Key' Sprinkler Head.jpg",
            img: '/img/Discrete "Hide a Key" Sprinkler Head.jpg'
        },
        {
            name:"Ultra-Soft 1800 Series Sheet Set.jpg",
            img:"/img/Ultra-Soft 1800 Series Sheet Set.jpg"
        },
        {
            name:"iPad Pro 9.7 32GB WifFi.jpg",
            img:'/img/iPad Pro 9.7" 32GB WifFi.jpg'
        }
      ];

      this.state ={
        junk: this.items
      }

    }
  render() {
    console.log(this.state.junk);
    var junkForAuction = this.state.junk.map(function(data, id){
            return ([
                <div className="auction-item-wrapper normal"key={id}>
                    <h5 className="auction-item-title" key={id}>{data.name}</h5>
                    <a><img src={data.img} alt="Bahahahahaha"/></a>
                    <Countdown />
                </div>
            ])
        })
        return (
            <div className="home">
                {junkForAuction}
            </div>
    )

  }
}
