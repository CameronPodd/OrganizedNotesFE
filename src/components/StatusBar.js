import React, { Component } from 'react';
import '../style/StatusBar.css';
import Arrow from '../assets/arrow.png';

class StatusBar extends Component {

	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.showHandler();
	}

	render() {
		return (
			<div className="StatusBar">
				<div id="empty" />
				<div id="statusBarText">{this.props.time}</div>
				<div id="Arrow">
					<img id="arrow" src={Arrow} alt="arrow" className={this.props.show ? 'flipped' : null} onClick={this.handleClick}/>
				</div>
			</div>
		);
	}
}

export default StatusBar;