import React, { Component } from 'react';
import './style/App.css';
import StatusBar from './components/StatusBar';
import TopBar from './components/TopBar';

class App extends Component {
	render() {
		return (
			<div className="App">
				<TopBar />
				<StatusBar time="Today" />
			</div>
		);
	}
}

export default App;
