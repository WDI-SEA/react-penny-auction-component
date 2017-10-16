import React, { Component } from 'react';
import Items from './Items.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="buffer"></div>
        <div className="itemRow"><Items /></div>
      </div>
    );
  }
}

export default App;
