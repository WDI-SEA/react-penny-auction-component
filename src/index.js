import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


var itemsForAuction = [
{
  title: "$10 Shell Gift Card",
  image: "/img/$10 Shell Gift Card.jpg",
  price: 5.00
},
{
  title: "$50 Walmart Gift Card",
  image: "/img/$50 Walmart Gift Card.jpg",
  price: 25.00
},
{
  title: "15 Voucher Bids",
  image: "/img/15 Voucher Bids.jpg",
  price: 1.00
},
{
  title: "250 Voucher Bids",
  image: "/img/250 Voucher Bids.jpg",
  price: 1.50
},
{
  title: "50 Voucher Bids",
  image: "/img/50 Voucher Bids.jpg",
  price: 2.50
},
{
  title: "iPad Pro 9.7 32 GB WiFi",
  image: "/img/iPad Pro 9.7 32 GB WifFi.jpg",
  price: 50.00
},
{
  title: "Cuisinart Convection Bread Maker",
  image: "/img/Cuisinart Convection Bread Maker.jpg",
  price: 20.00
},
{
  title: "Discrete Hide a Key Sprinkler Head",
  image: "/img/Discrete Hide a Key Sprinkler Head.jpg",
  price: 5.00
},
{
  title: "Ultra-Soft 1800 Series Sheet Set",
  image: "/img/Ultra-Soft 1800 Series Sheet Set.jpg",
  price: 5.00
},
{
  title: "Canon Pixma MG Series Wireless Printer",
  image: "/img/Canon Pixma MG Series Wireless Printer.jpg",
  price: 10.00
},
]

  var people = [
    "Place First Bid",
    "BidBoi95",
    "WnRWnRCkNDnR",
    "Il0v3M0nY",
    "sweetiePie88",
    "needajobrealbad",
    "UR_MOM_WINS",
    "shy_GUY",
    "Wario_IMA_gonna_win",
    "MY-BIDNESS",
  ]

ReactDOM.render(<App
                  users={people}
                  items={itemsForAuction}
               />,
              document.getElementById('root')
);
