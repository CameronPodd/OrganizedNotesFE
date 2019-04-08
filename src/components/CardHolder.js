import React, { Component } from 'react';
import Card from './Card';
import '../style/CardHolder.css';

class CardHolder extends Component {

  constructor(props) {
    super(props);
    console.log(this.props.cards);
    console.log(window.innerWidth);
  }

  render() {
    if (this.props.cards.length === 0) {
      return (
        <div className="empty">
				  No Cards at this time
			  </div>
      );
    }
    let cds = [];
    for (let i = 0; i < this.props.cards.length; i++) {
      cds.push(<Card data={this.props.cards[i]} removeCard={this.props.removeCard} key={i} />);
    }
		return (
			<div className="CardHolder">
        {cds}
			</div>
		);
	}
}

export default CardHolder;