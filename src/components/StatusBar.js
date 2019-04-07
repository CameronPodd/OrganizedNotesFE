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
				<table>
					<tbody>
						<tr>
							<td id="empty"></td>
							<td id="statusBarText">
								<span id="statusBarText">{this.props.time}</span>
							</td>
							<td id="Arrow">
								<img id="arrow" src={Arrow} alt="arrow" class={this.props.show ? 'flipped' : null} onClick={this.handleClick}/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default StatusBar;