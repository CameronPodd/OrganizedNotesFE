import React, { Component } from 'react';
import '../style/Card.css';
import Trash from '../assets/trash.png';

class Card extends Component {

	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
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
					<div className="edit"></div>
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
					{(this.props.data.time.hours - 12) < 1 ? this.props.data.time.hours : this.props.data.time.hours - 12}:
					{this.props.data.time.minutes < 10 ? "0" : ""}{this.props.data.time.minutes}
					{" "}{(this.props.data.time.hours - 12) < 1 ? "AM" : "PM"}
				</div>
      </div>
		);
	}
}

export default Card;