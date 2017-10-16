import React, {Component} from 'react';

export default class Countdown extends Component {
  constructor(prop) {
         super(prop)
         this.state = {
             ticks: 10,
             price: 0
         }
         this.timer = 0;
         this.tick = this.tick.bind(this);
         if(this.timer === 0) {
             this.timer = setInterval(this.tick, 1000)
         }
     }

     tick(){
         let ticks = this.state.ticks -1;
         this.setState({
             ticks: ticks
         });
         if (ticks === 0) {
             clearInterval(this.timer);
         }
     }
     bid(){
         let newPrice = this.state.price + 1;
         this.setState({
             price: newPrice,
             ticks: 10
         })
     }

     render(){
         let userBidder = (this.state.price === 0) ? (<div>Be the first to bid!!!!!!</div>)
         :(<div>Bid! Bid! Bid!</div>);

         if(this.state.ticks === 0 && this.state.price === 0){
             userBidder = <div> Nobody bid on this item </div>
         }else if(this.state.ticks === 0 && this.state.price >= 1){
             userBidder= <div className="animationText"> You won! </div>
         }

         let nonsence = (this.state.price === 0) ? (<div>Bid Today!</div>)
          : (<div>you can do it!!!!</div>)

         if(this.state.ticks === 0 && this.state.price === 0){
             nonsence = <div> you could have won this </div>
         }else if(this.state.ticks === 0 && this.state.price >= 1){
             nonsence= <div className="animationText"> Congradulations! </div>
         }
         return(
             <div className="bidder">

                 <h1>{this.state.ticks}</h1>
                 <h4>Current Price: ${(this.state.price/100).toFixed(2)}</h4>
                 {userBidder}
                 <button className="button bid medium" disable={this.state.ticks === 0} onClick={(e) => this.bid(e)}>Bid!</button>
                 <span>{nonsence}</span>
          </div>
         )
     }
 }
