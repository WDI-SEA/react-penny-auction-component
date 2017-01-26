import React, { Component } from 'react';
import './App.css';

class SingleItem extends Component {

  render() {
    return(
      <div className="container">
        <div> {this.props.title}</div>
        <div> {this.props.price}</div>
        <div><img src={this.props.image} /></div>
        <button className="btn btn-warning">Bid now</button>
      </div>
    );
}
}
export default SingleItem;
