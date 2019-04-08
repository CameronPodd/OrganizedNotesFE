import React, { Component } from 'react';
import '../style/App.css';
import Section from '../components/Section';
import TopBar from '../components/TopBar';

class App extends Component {

	render() {
		return (
			<div className="App">
				<TopBar />
				<Section time="Today" />
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
