import React, { Component } from 'react';
import './App.css';
import Auction from './Auction';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Join my scam and bid on some junk</h2>
        </div>
        <p className="App-intro"></p>
        <div className="saleItem">
          <Auction />
        </div>
        
      </div>
    );
  }
}

export default App;
