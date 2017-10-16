import React, { Component } from "react";

class Template extends Component {
  render() {
    return (
      <div className = "container">
        <div>
          {this.props.title}
        </div>
        <div>
          <img src = {this.props.img} />
        </div>
        <div>
          {this.props.timeLeft}
        </div>
        <div>
          {this.props.currentPrice}
        </div>
        <div>
          {this.props.user}
        </div>
        <div>
          <button className = "btn btn-warning"> Bid! </button>
        </div>
      </div>
    )
  }
}

export default Template;
