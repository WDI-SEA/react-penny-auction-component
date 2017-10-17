import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let itemList = [
        {
          item: '2nd Potion',
          link: '2nd-potion.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Arrow',
          link: 'arrow.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Blue Candle',
          link: 'blue-candle.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Blue Ring',
          link: 'blue-ring.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Bomb',
          link: 'bomb.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Book of Magic',
          link: 'book-of-magic.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Boomerang',
          link: 'boomerang.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Bow',
          link: 'bow.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Compass',
          link: 'compass.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Food',
          link: 'food.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Key',
          link: 'key.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Letter',
          link: 'letter.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Life-Potion',
          link: 'life-potion.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Magical Boomerang',
          link: 'magical-boomerang.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Magical Key',
          link: 'magical-key.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Magical-Rod',
          link: 'magical-rod.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Magical Shield',
          link: 'magical-shield.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Magical Sword',
          link: 'magical-sword.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'map',
          link: 'map.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Power Bracelet',
          link: 'power-bracelet.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Raft',
          link: 'raft.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Recorder',
          link: 'recorder.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Red-Candle',
          link: 'red-candle.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Red-Ring',
          link: 'red-ring.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Rupee',
          link: 'rupee.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Silver-Arrow',
          link: 'silver-arrow.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Stepladder',
          link: 'stepladder.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Sword',
          link: 'sword.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'White Sword',
          link: 'white-sword.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        },
        {
          item: 'Wooden Shield',
          link: 'wooden-shield.png',
          secondsLeft: 10,
          currentPrice: 0,
          currentHighBidder: ''
        }
      ]

//limits bidding to 3 items at a time
let bidIndices =[];
for(var i = 0; i<3; i++){
	var num = Math.floor(Math.random()*itemList.length);
	bidIndices.push(num);
}
let bidItems = [itemList[bidIndices[0]],itemList[bidIndices[1]],itemList[bidIndices[2]]]

ReactDOM.render(
  <App itemList={bidItems}/>,
  document.getElementById('root')
);
