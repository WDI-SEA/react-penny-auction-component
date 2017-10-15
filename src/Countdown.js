import React, {Component} from 'react';

class Countdown extends Component {
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
    // componentDidMount(){
    //     this.timerId = setInterval(() => this.tick(), this.props.ms);
    // }
    // componentWillUnmount(){
    //     clearInterval(this.timerId)
    // }
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
        let userBidder = null;
        if (this.state.price === 0) {
            userBidder = <div>Nobody has Bid yet!</div>
        } else {
            userBidder = <div>Viper!</div>
        }
        if(this.state.ticks === 0 && this.state.price === 0){
            userBidder = <div> Nobody bid on this item </div>
        }else if(this.state.ticks === 0 && this.state.price >= 1){
            userBidder= <div className="animationText"> Viper won! </div>
        }
        return(
            <div className="bidder">
                <h1>{this.state.ticks}</h1>
                <h4>Current Price: ${(this.state.price/100).toFixed(2)}</h4>
                {userBidder}
                <button disable={this.state.ticks === 0} onClick={(e) => this.bid(e)}>Bid Now</button>
            </div>
        )
    }
}

export default Countdown;