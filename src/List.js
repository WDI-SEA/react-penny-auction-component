import React, { Component } from "react";
import Items from "./Items";

class List extends Component {
  render() {
    const itemList = this.props.items.map((item, itemIndex) => {
      return <Items key={itemIndex} index={itemIndex}
              name={item.name} image={item.image}
              timeStart={item.timeStart} timeLeft={item.timeLeft}
              currentBid={item.currentBid} addBid={this.props.addBid}
              countdown={this.props.countdown} addToTimeLeft={this.priod.addToTimeLeft} />
    });
    return (
      <div>
        <ul>{itemList}</ul>
      </div>
    )
  }
}

export default List;
