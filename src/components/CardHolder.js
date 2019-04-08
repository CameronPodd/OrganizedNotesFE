import React, { Component } from 'react';
import Row from './Row';
import '../style/CardHolder.css';

class CardHolder extends Component {

  render() {
    if (this.props.cards.length === 0) {
      return (
        <div className="empty">
				  No Cards at this time
			  </div>
      );
    }

    let rows = Math.ceil((this.props.cards.length * 200) / window.innerWidth);
    let cpr = Math.ceil(this.props.cards.length / rows);
    let rend = [];
    for (let i = 0; i < rows; i++) {
      let cdsnew = this.props.cards;
      let cds = cdsnew.slice(cpr * i, cpr * (i + 1));
      rend.push(<Row cards={cds} removeCard={this.props.removeCard} key={i} />);
    }
		return (
      <div id="CardHolder">
        {rend}
      </div>
		);
	}
}

export default CardHolder;