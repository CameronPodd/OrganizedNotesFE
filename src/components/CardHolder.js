import React, { Component } from 'react';
import '../style/CardHolder.css';

class CardHolder extends Component {
  render() {
		return (
			<div className="StatusArea">
				<StatusBar time={this.props.time} show={this.state.show} showHandler={this.handleshowchange} />
			</div>
		);
	}
}

export default CardHolder;