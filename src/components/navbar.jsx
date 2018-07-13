import React, { Component } 				from 'react';

class Navbar extends Component {
	constructor(props) {
		super(props);
	}

	render () {
		console.log("HERE", window.location)
		return(
			<div>
				<div className="navbar-container">
					<a href="/swipe" className="navbar" alt="profile">
						<img src="img/Profile.png" />
						{window.location==="/home" ? <img src="img/Reactangle.png" /> : null}
					</a>
					<a href="/matches" className="navbar" alt="match">
						<img src="img/Match.png" />
						{window.location==="/match" ? <img src="img/Reactangle.png" /> : null}
					</a>
					<a href="/chat" className="navbar" alt="chat">
						<img src="img/chat.png" />
						{window.location==="/chat" ? <img src="img/Reactangle.png" /> : null}
					</a>
				</div>
			</div>
		)
	}
}

export default Navbar