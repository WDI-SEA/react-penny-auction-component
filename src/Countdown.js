import React, {Component} from 'react';

class Countdown extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            ticks: parseInt(this.props.start)
        }
    }
    componentDidMount(){
        this.timerId = setInterval(() => this.tick(), this.props.ms);
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    tick(){
        this.setState((state, props) => ({
            ticks: state.ticks > 0 ? state.ticks - 1 : console.log("finished") 
        }));
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.ticks}</h1>
            </div>
        )
    }
}

export default Countdown;