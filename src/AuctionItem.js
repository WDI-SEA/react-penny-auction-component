import React, { Component } from 'react';

let timeReset = 20;

class AuctionItem extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            name: props.auctionItem.name,
            image: props.auctionItem.image,
            timeLeftSec: timeReset,
            logedInUserName: props.userName,
            lastBidUserName: 'nobody',
            price: 1
        }
        setInterval(() =>{
            if (this.state.timeLeftSec > 0){
                var newTime = this.state.timeLeftSec -1;
                this.setState({
                    timeLeftSec: newTime
                }) 
            }
        }, 1000);
    }
    
    makeBid(e){
        console.log('bidding');
        let newPrice = this.state.price + 1;
        this.setState({
            timeLeftSec: timeReset,
            price: newPrice,
            lastBidUserName: this.state.logedInUserName
        })
    }
    
    // decreaseTime(){
    //     if (this.state.timeLeftSec > 0){
    //         var newTime = this.state.timeLeftSec -1;
    //        this.setState({
    //         timeLeftSec: newTime
    //        }) 
    //     }
    // }
    
    
    
    
    render() {
        let hideButton = this.state.timeLeftSec === 0;
        return ( 
            <div className='auctionitem'>
              <p>{this.state.name}</p>
              <img src={this.state.image} />
              <p>{this.state.timeLeftSec} second(s) left for bid</p>
              <p>{this.state.price}$ bidded by {this.state.lastBidUserName}</p>
              {
                hideButton 
                    ? <p>Auction Over </p> 
                    : <button type='button' onClick={(e) => this.makeBid(e)}>Bid Now</button> 
              }
            </div>
        )
    }
}    

export default AuctionItem;