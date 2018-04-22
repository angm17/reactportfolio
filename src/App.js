import React, { Component } from 'react';
import './App.css';
import Container from './components/Container/Container';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
class App extends Component {
	constructor(){
		super();
		this.state = {
			isLoggedIn: false
		};
	}
	login(){
		this.setState(prevState => ({
			isLoggedIn: !prevState.isLoggedIn
		})); 
	}
	render() {
		return (
			<div className="App">
				<Sidebar/>
				<Container isLoggedIn={this.state.isLoggedIn}/>
				<Footer login={this.login.bind(this)} isLoggedIn={this.state.isLoggedIn}/>
			</div>
		);
	}
}

export default App;
