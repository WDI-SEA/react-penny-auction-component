import React, { Component } from 'react';
import './App.css';
import Timer from './Timer.js'


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
          <img alt={itemData.title} src={itemData.image}/>
          <Timer price={itemData.price} users={this.state.bidders}/>
        </div>
      ))
    return (
      <div>
        {allItemsArr}
      </div>
    );
  }
}






export default App;
