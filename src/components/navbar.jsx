import React, { Component } 				from 'react';

class Navbar extends Component {
	constructor(props) {
		super(props);
	}

	render () {
		return(
			<div>
				<a href="/home" />
				<a href="/matches" />
				<a href="/chat" >
					<img src="img/Logo.png" />
				</a>
			</div>
		)
	}
}

export default Navbar