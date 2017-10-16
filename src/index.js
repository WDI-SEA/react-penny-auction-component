import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var items = [
	{
		name: "$10 Shell Gift Card",
		image: "/img/$10 Shell Gift Card.jpg",
		timeLeft: 10,
		price: 1,
		user: "Evan"
	},
	{
		name: "$50 Walmart Gift Card",
		image: "/img/$50 Walmart Gift Card.jpg",
		timeLeft: 10,
		price: 1,
		user: "Evan"
	},
	{
		name: "15 Voucher Bids.jpg",
		image: "/img/15 Voucher Bids.jpg",
		timeLeft: 10,
		price: 1,
		user: "Evan"
	},
	{
		name: "250 Voucher Bids",
		image: "/img/250 Voucher Bids.jpg",
		timeLeft: 10,
		price: 1,
		user: "Evan"
	},
	{
		name: "50 Voucher Bids",
		image: "/img/50 Voucher Bids.jpg",
		timeLeft: 10,
		price: 1,
		user: "Evan"
	},
	{
		name: "Canon Pixma MG Series Wireless Printer",
		image: "/img/Canon Pixma MG Series Wireless Printer.jpg",
		timeLeft: 10,
		price: 1,
		user: "Evan"
	},
	{
		name: "Cuisinart Convection Bread Maker",
		image: "/img/Cuisinart Convection Bread Maker.jpg",
		timeLeft: 10,
		price: 1,
		user: "Evan"
	},
	{
		name: "Discrete 'Hide a Key' Sprinkler Head",
		image: '/img/Discrete "Hide a Key" Sprinkler Head.jpg',
		timeLeft: 10,
		price: 1,
		user: "Evan"
	},
	{
		name: "Ultra-Soft 1800 Series Sheet Set",
		image: "/img/Ultra-Soft 1800 Series Sheet Set.jpg",
		timeLeft: 10,
		price: 1,
		user: "Evan"
	},
	{
		name: 'iPad Pro 9.7" 32GB WiFi',
		image: '/img/iPad Pro 9.7" 32GB WifFi.jpg',
		timeLeft: 10,
		price: 1,
		user: "Evan"
	}
]

ReactDOM.render(
  <App items = {items}/>,
  document.getElementById('root')
);
