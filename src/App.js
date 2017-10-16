import React, { Component } from 'react';
import './App.css';
import Bid from './Bid.js'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      bidders: props.users,
      itemsArr: props.items,
    }
  }

  render(){
    let allItemsArr = this.state.itemsArr.map((itemData, index) => (
        <div className="container" key={index}>
          <h4 key={index}> {itemData.title} </h4>
          <hr/>
          <img alt={itemData.title} src={itemData.image}/>
          <Bid price={itemData.price} users={this.state.bidders}/>
        </div>
      ))
    return (
      <div>
        <div className="App-header">
          <img id="logo" alt="Logo" src="../img/logo.png"/>
        </div>
        {allItemsArr}
      </div>
    );
  }
}






export default App;
