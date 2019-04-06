import React, { Component } from 'react';
import './style/App.css';
import StatusArea from './components/StatusArea';
import TopBar from './components/TopBar';
import {get} from './classes/httprequests';

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
					cards: res
				}}
			)
			.catch(err => {
				console.log(err);
			})
	}

	render() {
		return (
			<div className="App">
				<TopBar />
				<StatusArea time="Today" cards={this.state.cards.today} />
				<StatusArea time="Yesterday" cards={this.state.cards.yesterday} />
				<StatusArea time="This Week" cards={this.state.cards.week} />
				<StatusArea time="This Month" cards={this.state.cards.month} />
				<StatusArea time="This Year" cards={this.state.cards.year} />
				<StatusArea time="Older" cards={this.state.cards.old} />
			</div>
		);
	}
}

export default App;
