import React, { Component } from 'react';
import Items from './Items.js';
// import Timer from './Timer.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = ({
    //   merp:'merp' //react didn't like this being blank
    // })
  }

  render() {
    // console.log("###apps props###",this.props)
    return (
      <div className="App">
        <div id="pageWrapper">
          <div className="buffer"></div>
          <div className="itemRow">
            <div className="itemSection">
              {this.props.itemList.map((item,index) => <Items item={item} key={index} parentKey={index}/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
