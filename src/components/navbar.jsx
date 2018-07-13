import React, { Component } 				from 'react';

class Navbar extends Component {
	constructor(props) {
		super(props);
	}

	render () {
		return(
			<div>
				<div className="navbar-container">
					<a href="/home" className="navbar">
						<img src="img/Profile.png" />
					</a>
					<a href="/matches" className="navbar">
						<img src="img/Match.png" />
					</a>
					<a href="/chat" className="navbar">
						<img src="img/chat.png" />
					</a>
				</div>
			</div>
		)
	}
}

export default Navbar