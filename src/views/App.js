import React, { Component } from 'react';
import '../style/App.css';
import Section from '../components/Section';
import TopBar from '../components/TopBar';
import {get} from '../classes/httprequests';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: {
				today: [],
				yesterday: [],
				week: [],
				month: [],
				year: [],
				old: []
			}
		}
		get('cards')
			.then(res => {
				this.state = {
					cards: res.data.cards
				}
			})
			.catch(err => {
				console.log(err);
			})
	}

	render() {
		return (
			<div className="App">
				<TopBar />
				<Section time="Today" cards={this.state.cards.today} />
				<Section time="Yesterday" cards={this.state.cards.yesterday} />
				<Section time="This Week" cards={this.state.cards.week} />
				<Section time="This Month" cards={this.state.cards.month} />
				<Section time="This Year" cards={this.state.cards.year} />
				<Section time="Older" cards={this.state.cards.old} />
			</div>
		);
	}
}

export default App;
