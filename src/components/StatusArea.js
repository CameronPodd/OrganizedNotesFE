import React, { Component } from 'react';
import StatusBar from './StatusBar';
import '../style/statusArea.css';

class StatusArea extends Component {

	constructor(props) {
		super(props);
		this.state = {
			show: true,
			invisible: (this.props.cards.length <= 0)
		}
	}

	render() {
		/*if (this.state.invisible) {
			return null;
		}*/
		return (
			<div className="StatusArea">
				<StatusBar time={this.state.time} />
			</div>
		);
	}
}

export default StatusArea;