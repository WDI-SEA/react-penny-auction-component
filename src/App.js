import React, { Component } from 'react';
import './App.css';
import Items from './Items';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items
    }
  }

  render() {
    let itemList = this.state.items.map((item, index) => (
      <Items item= {item} key={index}/>
      ))

    return (
      <div>
        <h1>Penny Auction</h1>
        {itemList}
      </div>
    );
  }
}

export default App;
