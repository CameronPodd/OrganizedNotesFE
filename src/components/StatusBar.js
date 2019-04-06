import React, { Component } from 'react';
import '.././style/StatusBar.css';

class StatusBar extends Component {
	handleShowChange(e) {
		
	}

	render() {
		return (
			<div className="StatusBar">
				{this.props.time}
			</div>
		);
	}
}

export default StatusBar;