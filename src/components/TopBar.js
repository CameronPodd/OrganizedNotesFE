import React, { Component } from 'react';
import '.././style/TopBar.css';
import AddCard from './AddCard';
import Logo from '../assets/Logo.jpg';

class TopBar extends Component {

	render() {
		return (
			<div className="TopBar">
				<table>
					<tbody>
						<tr>
							<td id="Logo">
								<img id="logo" src={Logo} alt="logo"/>
							</td>
							<td id="Title">Quick and Organized Notes</td>
							<td id="AddCard"><AddCard addCard={this.props.addCard}/></td>
						</tr>
						</tbody>
				</table>
			</div>
		);
	}
}

export default TopBar;