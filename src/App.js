import React, { Component } from 'react';
import Items from './Items.js';
// import Timer from './Timer.js';
import './App.css';

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <div id="pageWrapper">
          <div className="buffer"></div>
          <div className="itemRow"><Items /></div>
        </div>
      </div>
    );
  }
}

export default App;
