import React, { Component } from 'react';
import Timer from './Timer.js';
import './App.css';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      itemList: [
        // {
        //   item: '2nd Potion',
        //   link: '2nd-potion.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        // {
        //   item: 'Arrow',
        //   link: 'arrow.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        {
          item: 'Blue Candle',
          link: 'blue-candle.png',
          secondsLeft: <Timer />,
          currentPrice: 0,
          currentHighBidder: ''
        },
        // {
        //   item: 'Blue Ring',
        //   link: 'blue-ring.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        // {
        //   item: 'Bomb',
        //   link: 'bomb.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        {
          item: 'Book of Magic',
          link: 'book-of-magic.png',
          secondsLeft: <Timer />,
          currentPrice: 0,
          currentHighBidder: ''
        },
        // {
        //   item: 'Boomerang',
        //   link: 'boomerang.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        // {
        //   item: 'Bow',
        //   link: 'bow.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        // {
        //   item: 'Compass',
        //   link: 'compass.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        {
          item: 'Food',
          link: 'food.png',
          secondsLeft: <Timer />,
          currentPrice: 0,
          currentHighBidder: ''
        },
        // {
        //   item: 'Key',
        //   link: 'key.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        // {
        //   item: 'Letter',
        //   link: 'letter.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        // {
        //   item: 'Life-Potion',
        //   link: 'life-potion.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        // {
        //   item: 'Magical Boomerang',
        //   link: 'magical-boomerang.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        // {
        //   item: 'Magical Key',
        //   link: 'magical-key.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        // {
        //   item: 'Magical-Rod',
        //   link: 'magical-rod.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        // {
        //   item: 'Magical Shield',
        //   link: 'magical-shield.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        // {
        //   item: 'Magical Sword',
        //   link: 'magical-sword.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        // {
        //   item: 'map',
        //   link: 'map.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        // {
        //   item: 'Power Bracelet',
        //   link: 'power-bracelet.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        // {
        //   item: 'Raft',
        //   link: 'raft.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        // {
        //   item: 'Recorder',
        //   link: 'recorder.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        // {
        //   item: 'Red-Candle',
        //   link: 'red-candle.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        // {
        //   item: 'Red-Ring',
        //   link: 'red-ring.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        // {
        //   item: 'Rupee',
        //   link: 'rupee.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        // {
        //   item: 'Silver-Arrow',
        //   link: 'silver-arrow.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        // {
        //   item: 'Stepladder',
        //   link: 'stepladder.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        // {
        //   item: 'Sword',
        //   link: 'sword.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        // {
        //   item: 'White Sword',
        //   link: 'white-sword.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // },
        // {
        //   item: 'Wooden Shield',
        //   link: 'wooden-shield.png',
        //   secondsLeft: 10,
        //   currentPrice: 0,
        //   currentHighBidder: ''
        // }
      ]
    })
  }

  componentDidMount() {

  }

  handleClick(e,index){
    e.preventDefault();
    let newItemList = this.state.itemList;
    newItemList[index].currentPrice+=1;
    newItemList[index].currentHighBidder = 'Link';
    this.setState({
      itemList: newItemList
    })
  }

  render() {
    
      return (
      <div className="itemSection">
        {
          this.state.itemList.map((item,index) => 

            <div key={index} className="componentWrapper">
              <h3>{item.item}</h3>
              <img src={`img/${item.link}`} alt="" />
              <div className="itemInfo">
                <p>
                  High Bid: {item.currentPrice} x {<img src="img/rupee.png" alt=""/>}
                </p>
              </div>
              <div className="itemInfo"><p>Bidder: {item.currentHighBidder}</p></div>
              <div className="itemInfo">
                <p>Timer: <Timer secondsLeft={item.secondsLeft}/></p>
              </div>
              <button onClick={(e) => this.handleClick(e,index)}>
                {<img src="img/rupee.png" alt=""/>} <div>+ 1</div>
              </button>
            </div>
          )
        }
            

        
      </div>
    );
  }
}

export default Items;
