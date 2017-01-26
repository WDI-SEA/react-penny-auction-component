import React, { Component } from 'react';
import Moment from 'react-moment';

import Product from './product';
import './productListings.css';

class ProductListings extends Component {

  render() {
    const productList = this.props.products.map((product, productIndex) => {
      return <Product key={productIndex} index={productIndex}
                      name={product.name} image={product.image}
                      timeStart={product.timeStart} currentBid={product.currentBid}
                      addToBid={this.props.addToBid} />
    });

    return (
      <div className="container products">
        <ul className="list-group">{productList}</ul>
      </div>
    );
  }

}

export default ProductListings;
