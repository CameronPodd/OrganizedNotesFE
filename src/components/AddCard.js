import React, { Component } from 'react';
import post from './../classes/httprequests';
import '.././style/AddCard.css';

class AddCard extends Component {

	render() {
		return (
			<div className="AddCard">
        <button id="openDio">Add Note</button>
			</div>
		);
	}
}

export default AddCard;