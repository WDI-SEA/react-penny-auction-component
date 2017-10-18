import React, { Component } from 'react';
import './App.css';

class Bid extends Component {
	constructor(props) {
		super()
		this.state = {
			seconds: 10,
			dollar: 0,
			cents: {
				tenths: 0,
				ones: 1
			}
		}
	}


	render() {
		return(
			<div>
				<h5>00:00:{this.state.seconds}</h5>
				<p>${this.state.dollar}.{this.state.cents.tenths}{this.state.cents.ones}</p>
				<p>username is the current highest bidder</p>
				<button type='button'>Bid Now</button>
			</div>
		)
	}
}

export default Bid;