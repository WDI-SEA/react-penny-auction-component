import React, { Component } from 'react';


class AuctionItem extends Component {
    constructor(props){
        super();
        this.state = {
            name: props.auctionItem.name,
            image: props.auctionItem.image,
            userName: ''
        }
    }
    
    makeBid(e){
        console.log('bidding');
        let yourName = prompt('What is your name?');
        this.setState({
            userName: yourName
        })
    }
    
    
    
    
    
    
    render() {
        return ( 
            <div>
              <p>{this.state.name}</p>
              <img src={this.state.image} />
              <p>{this.state.userName}</p>
              <button onClick={(e) => this.makeBid(e)}>Bid Now</button> 
            </div>
        )
    }
}    

export default AuctionItem;