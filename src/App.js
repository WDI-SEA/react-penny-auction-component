import React, { Component } from 'react';
import './App.css';
import Countdown from './Countdown';
import Auction from './Auction'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="/img/smug-LittleFinger.gif" className="App-logo header" alt="logo" />
          <h2 className="header">Lord Baelish's Game of Bargains</h2>
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
