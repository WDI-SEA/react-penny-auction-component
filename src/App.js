import React, { Component } from 'react';
import './App.css';
import Auction from './Auction'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src="/img/smug-LittleFinger.gif" className="App-logo header" alt="logo" />
          <h2 className="header"><br/> Lord Baelish's Game of Bargains</h2>
          <p className="">Westori goods found from everywhere between Winterfell to Dorne</p>
        </div>
        
        <div className="mainBody">
          <div className="salesField">
            <h2>Live Auctions:</h2>
            <Auction />
          </div>
          
        </div>

      </div>
    );
  }
}

export default App;
