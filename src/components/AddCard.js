import React, { Component } from 'react';

import AddCardPopup from './AddCardPopup';

import '../style/AddCard.css';

class AddCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showPopup: false
		}

		this.togglePopup = this.togglePopup.bind(this);
	}

	togglePopup() {
		this.setState(state => ({
			showPopup: !state.showPopup
		}));
	}

	render() {
		return (
			<div className="AddCard">
				<button id="openDio" onClick={this.togglePopup}>
					{this.state.showPopup ? "Cancel": "Add Note"}
				</button>
				{this.state.showPopup ? <AddCardPopup togglePopup={this.togglePopup} addCard={this.props.addCard} /> : null}
			</div>
		);
	}
}

export default AddCard;