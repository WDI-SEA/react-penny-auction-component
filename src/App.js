import React, { Component } from 'react';
import './App.css';
import Items from './Items';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Penny Auction</h1>
        <Items />
      </div>
    );
  }
}

export default App;
