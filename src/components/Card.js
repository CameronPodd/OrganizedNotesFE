import React, { Component } from 'react';
import EditCardPopup from './EditCardPopup';
import '../style/Card.css';
import Trash from '../assets/trash.png';
import Edit from '../assets/edit.png';

class Card extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showPopup: false
		}
		this.handleClick = this.handleClick.bind(this);
		this.togglePopup = this.togglePopup.bind(this);
	}

	togglePopup() {
		this.setState(state => ({
			showPopup: !state.showPopup
		}));
	}

	handleClick() {
		this.props.removeCard(this.props.data._id);
	}

  render() {
		let renderlinks = [];
		for (let i = 0; i < this.props.data.links.length; i++) {
			renderlinks.push(<a href={this.props.data.links[i]} key={2 * i}>{this.props.data.links[i]}</a>)
			renderlinks.push(<br key={2 * i + 1} />);
		}
		return (
			<div className="Card">
				<div id="Header">
					<img src={Edit} alt="edit" className="edit" onClick={this.togglePopup}/>
					<div className="Title"><strong>{this.props.data.title}</strong></div>
					<img src={Trash} alt="trash" className="trash" onClick={this.handleClick}/>
				</div>
				<div className="Body">
					{this.props.data.body}<br />
					{(renderlinks.length > 0) ? <strong>Links</strong> : null}
					{(renderlinks.length > 0) ? <br /> : null}
					{(renderlinks.length > 0) ? renderlinks : null}
				</div>
				<div className="Footer">
					Created at {this.props.data.time.month + 1}-{this.props.data.time.day}-
					{this.props.data.time.year} at {" "}
					{(this.props.data.time.hours - 12) < 1 ? (this.props.data.time.hours === 0 ? 12 : this.props.data.time.hours) : this.props.data.time.hours - 12}:
					{this.props.data.time.minutes < 10 ? "0" : ""}{this.props.data.time.minutes}
					{" "}{(this.props.data.time.hours - 12) < 1 ? "AM" : "PM"}
				</div>
				<div id="EditCardPopup">
					{this.state.showPopup ? <EditCardPopup getCards={this.props.getCards} togglePopup={this.togglePopup} editCard={this.props.editCard} data={this.props.data} /> : null}
				</div>
			</div>
		);
	}
}

export default Card;