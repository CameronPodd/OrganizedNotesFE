import React, { Component } from 'react';
import '.././style/StatusBar.css';

class StatusBar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			time: this.props.time
		}
	}

	render() {
		return (
			<div className="StatusBar">
				{this.state.time}
			</div>
		);
	}
}

export default StatusBar;