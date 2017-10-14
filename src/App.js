import React, { Component } from 'react';
import './App.css';
import Item from './Item.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1> Penny Auction Clone </h1> 
        </div>
        <Item />
      </div>
    );
  }
}

export default App;
