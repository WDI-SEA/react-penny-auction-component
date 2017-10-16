import React, {Component} from 'react';
import './App.css';

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <div>
          {this.props.title}
        </div>
        <div>
          <img src={this.props.img} />
        </div>
        <div>
          {this.props.timeRemaining}
        </div>
        <div>
          {this.props.currentPrice}
        </div>
        <div>
          {this.props.user}
        </div>
        <div>
          <button className="btn btn-warning">Place Bid!</button>
        </div>
      </div>
    )
  }
}

export default Layout;
