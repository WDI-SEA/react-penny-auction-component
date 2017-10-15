import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Item from './Item';




class App extends Component {
  constructor(props){
    //super makes call to parent class (componenet constructor)
    super()
    // define an initial started


  }
  render() {

    return (
      <div>
        <Header />
        <Item  />



      </div>

    );
  }
}

export default App;
