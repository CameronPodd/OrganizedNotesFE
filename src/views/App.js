import React, { Component } from 'react';
import '../style/App.css';
import Section from '../components/Section';
import TopBar from '../components/TopBar';

class App extends Component {

	constructor(props) {
		super(props);
		this.today = React.createRef();
		this.addCard = this.addCard.bind(this);
	}

	addCard() {
		this.today.current.getCards();
	}

	render() {
		return (
			<div className="App">
				<TopBar addCard={this.addCard} />
				<Section ref={this.today} time="Today" />
				<Section time="Yesterday" />
				<Section time="This Week" />
				<Section time="This Month" />
				<Section time="This Year" />
				<Section time="Older" />
			</div>
		);
	}
}

export default App;
