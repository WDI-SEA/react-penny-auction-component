import React, { Component } from 'react';
import Product from './product';
import './productListings.css';

class ProductListings extends Component {

  render() {
    const productList = this.props.products.map((product, index) => {
      return <Product key={index} name={product.name} image={product.image} time={new Date()} />
    });

    return (
      <div className="container products">
        <ul className="list-group">{productList}</ul>
      </div>
    );
  }

}

export default ProductListings;
