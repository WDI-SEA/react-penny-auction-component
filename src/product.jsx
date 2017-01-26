import React, { Component } from 'react';

class Product extends Component {

  render() {
    return (
      <div className="well cell">
        <p>{this.props.name}</p>
        <img src={this.props.image} alt={this.props.name} />
      </div>
    );
  }

}

export default Product;
