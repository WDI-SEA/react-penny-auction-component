import React, { Component } from 'react';
import Countdown from 'react-count-down'

class Auctioncard extends Component {
  render() {
    const cb = () => {
      console.log('expired callback')
    }
  
    const OPTIONS = { endDate: this.props.bidExperation, prefix: 'left', cb}
    return (
      <div className="card" >
        <img className="card-img-top" src={this.props.imageUrl} alt="Card image cap" />
        <div className="card-block">
          <h4 className="card-title">{this.props.title}</h4>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><Countdown options={OPTIONS} /></li>
          <li className="list-group-item">{this.props.currentBid}</li>
          <li className="list-group-item">{this.props.userId}</li>
          <li className="list-group-item"><button type= "button" className= "btn btn-danger" >Bid Now </button></li>
        </ul>
      </div>
    )}
}
export default Auctioncard;
