import React, { Component } from 'react';
import './App.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = ({
        timer: null,
        secondsLeft: 10
    })
    this.componentDidMount=this.componentDidMount.bind(this);
    this.componentWillUnmount=this.componentWillUnmount.bind(this);
    this.tick=this.tick.bind(this);
  }

  componentDidMount() {
      let timer = setInterval(this.tick,1000);
      this.setState({
        timer:timer
    });
        
  }

  componentWillUnmount(){
    this.clearInterval(this.state.timer);
  }
  
  tick(){
    if(this.state.secondsLeft>0){
        this.setState({
            secondsLeft: this.state.secondsLeft - 1
        });
    }
  }

  render() {
    // console.log('##TIMER STATE##',this.props)
    return (
      <span>{this.state.secondsLeft}</span>
    );
  }
}

export default Timer;
