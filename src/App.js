import React, { Component } from 'react';
import './App.css';
import AuctionItem from './AuctionItem';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      auctionItems: props.auctionItems
    }
  }
  
  render() {
    let auctionItemsHtml = this.state.auctionItems.map((item, index) => (
      <AuctionItem auctionItem = {item} key = {`${index}_${item.name}`}/>
    ))
    return (
      
      
      <div className="App">  
        {auctionItemsHtml}
      </div>
    );
  }
}

export default App;
