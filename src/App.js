import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <div>
          <p>Arrow</p>
          <img src="/img/arrow.png" />
        </div>
        <div>
          <p>Blue Ring</p>
          <img src="/img/blue-ring.png" />
        </div>
        <div>
          <p>Letter</p>
          <img src="/img/letter.png" />
        </div>
        <div>
          <p>Magical Shield</p>
          <img src="/img/magical-shield.png" />
        </div>
        <div>
          <p>Magical Sword</p>
          <img src="/img/magical-sword.png" />
        </div>
        <div>
          <p>Raft</p>
          <img src="/img/raft.png" />
        </div>
        <div>
          <p>White Sword</p>
          <img src="/img/white-sword.png" />
        </div>
        <div>
          <p>Magical Rod</p>
          <img src='/img/magical-rod.png' />
        </div>
        <div>
          <p>Boomerang</p>
          <img src="/img/boomerang.png" />
        </div>
        <div>
          <p>Food</p>
          <img src='/img/food.png' />
        </div>

      </div>
    );
  }
}

export default App;
