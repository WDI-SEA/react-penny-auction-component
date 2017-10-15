import React, { Component } from 'react';
import './App.css';
import AuctionItem from './AuctionItem';

class App extends Component {
  
  constructor(props){
    super(props);
    let yourName = prompt('What is your name?');    
    this.state = {
      auctionItems: props.auctionItems,
      userName: yourName
    }

  }
  
  render() {
    let auctionItemsHtml = this.state.auctionItems.map((item, index) => (
      <AuctionItem auctionItem = {item} userName = {this.state.userName} key = {`${index}_${item.name}`}/>
    ))
    return (
      
      
      <div className="App">  
        {auctionItemsHtml}
      </div>
    );
  }
}

export default App;
