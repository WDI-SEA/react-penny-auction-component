import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let auctionItems = [
 {
  name: '$10 Shell Gift Card',
  image: "/img/$10 Shell Gift Card.jpg" 
 },  
 {
  name: '$50 Walmart Gift Card',
  image: "/img/$50 Walmart Gift Card.jpg"  
 },
 {
  name: '15 Voucher Bids',
  image: "/img/15 Voucher Bids.jpg"  
 },
 {
  name: '250 Voucher Bids',
  image: "/img/250 Voucher Bids.jpg"  
 },
 {
  name: '50 Voucher Bids',
  image: "/img/50 Voucher Bids.jpg"  
 },
 {
  name: 'Canon Pixma MG Series Wireless Printer',
  image: "/img/Canon Pixma MG Series Wireless Printer.jpg"  
 },
 {
  name: 'Cuisinart Convection Bread Maker',
  image: "/img/Cuisinart Convection Bread Maker.jpg"  
 },
 {
  name: 'Discrete "Hide a Key" Sprinkler Head',
  image: '/img/Discrete "Hide a Key" Sprinkler Head.jpg'  
 },
 {
  name: 'Ultra-Soft 1800 Series Sheet Set',
  image: "/img/Ultra-Soft 1800 Series Sheet Set.jpg"  
 },
 {
  name: 'iPad Pro 9.7" 32GB WifFi',
  image: '/img/iPad Pro 9.7" 32GB WifFi.jpg'  
 }
]

ReactDOM.render(
  <App auctionItems = {auctionItems}/>,
  document.getElementById('root')
);
