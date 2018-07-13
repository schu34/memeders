import React, { Component } 				from 'react';

class Navbar extends Component {
	constructor(props) {
		super(props);
	}

	render () {
		return(
			<div>
				<a href="/home" className="navbar">home</a>
				<a href="/matches" className="navbar">matches</a>
				<a href="/chat" >
					<img src="img/Logo.png" className="logo"/>
				</a>
			</div>
		)
	}
}

export default Navbar