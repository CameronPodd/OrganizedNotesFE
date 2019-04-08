import React, { Component } from 'react';
import Card from './Card';
import '../style/Row.css';

class Row extends Component {

  render() {
    let rend = []
    for (let i = 0; i < this.props.cards.length; i++) {
      rend.push(<Card data={this.props.cards[i]} removeCard={this.props.removeCard} key={i} />);
    }
    return (
      <div className="Row">
        {rend}
      </div>
    );
  }
}

export default Row;