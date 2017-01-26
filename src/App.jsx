import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import template from './template';
import BidList from './BidList';

class App extends Component {
  render() {
    return (
        <BidList />
    );
  }
}

export default App;
