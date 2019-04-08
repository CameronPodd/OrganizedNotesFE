import React, { Component } from 'react';
import StatusBar from './StatusBar';
import '../style/Section.css';

class Section extends Component {

	constructor(props) {
		super(props);
		this.state = {
			show: (this.props.time === "Today"),
		};

		this.handleshowchange = this.handleshowchange.bind(this);
		this.setStartEndDays = this.setStartEndDays.bind(this);

		this.setStartEndDays(this.props.time);
	}

	handleshowchange() {
		this.setState({
			show: !this.state.show
		});
	}

	setStartEndDays(time) {
		switch (time) {
			case "Today":
				break;
			case "Yesterday":
				break;
			case "This Week":
				break;
			case "This Month":
				break;
			case "Older":
				break;
		}
	}

	render() {
		return (
			<div className="StatusArea">
				<StatusBar time={this.props.time} show={this.state.show} showHandler={this.handleshowchange} />
			</div>
		);
	}
}

export default Section;