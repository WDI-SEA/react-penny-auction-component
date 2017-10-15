import React, { Component } from 'react';
import Countdown from './Countdown'



class Auction extends Component {
    constructor(props) {
        super(props)
//     var sale = {
//         name: '$10 Shell Gift Card',
//         img: '/img/$10 Shell Gift Card.jpg',
//         price: 0,
        
//     }   
//     this.state = {
//         item: sale.name,
//         image: sale.img,
//         price: (sale.price),
//         intro: 10
//     }
//     //bind this for function
//     this.addBid = this.addBid.bind(this);
//     this.resetTimer = this.resetTimer(this);
// }


//     addBid(e) {
//         e.preventDefault();
//         this.setState({
//             price: parseInt(this.state.price)+ 1,
//         });
//     }
//     resetTimer(e) {
//         this.setState({
//             time: 10
//         });
    this.items = [
        {
            title: "$10 Shell Gift Card",
            src: "/img/$10 Shell Gift Card.jpg"
        },
        {
            title: "$50 Walmart Gift Card",
            src: "/img/$50 Walmart Gift Card.jpg"
        },
        {
            title: "15 Voucher Bids",
            src: "/img/15 Voucher Bids.jpg"
        },
        {
            title: "250 Voucher Bids",
            src: "/img/250 Voucher Bids.jpg"
        },
        {
            title: "50 Voucher Bids",
            src: "/img/50 Voucher Bids.jpg"
        },
        {
            title: "Canon Wireless Printer",
            src: "/img/Canon Pixma MG Series Wireless Printer.jpg"
        },
        {
            title: "Cuisinart Bread Maker",
            src: "/img/Cuisinart Convection Bread Maker.jpg"
        },
        {
            title: "'Hide a Key' Sprinkler Head",
            src: '/img/Discrete "Hide a Key" Sprinkler Head.jpg'
        },
        {
            title: "Ultra-Soft Sheet Set",
            src: "/img/Ultra-Soft 1800 Series Sheet Set.jpg"
        },
        {
            title: "iPad Pro 9.7 32GB WifFi ",
            src: '/img/iPad Pro 9.7" 32GB WifFi.jpg'
        }
        ]
        this.state = {
        itemArray: this.items
        }
    }
    
    render() {
        var mappedItems = this.state.itemArray.map(function(data, id){
            return ([
                <div className="saleItem"key={id}>
                    <p key={id}>{data.title}</p>
                    <img src={data.src} alt="Great Item"/>
                    <Countdown />
                </div>
            ])
        })
        return (
            <div>
                {mappedItems}
            </div>
        )
    }
}

export default Auction;