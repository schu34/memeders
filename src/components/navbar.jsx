import React, { Component } 				from 'react';

class Navbar extends Component {
	constructor(props) {
		super(props);
	}

	getPath(location) {

    	const arr = location.split("/")
    	return arr[arr.length-1];
	}	

	render () {
		console.log("HERE", window.location.pathname)
		return(
			<div>
				<div className="navbar-container">
					<a href="/swipe" className="navbar" alt="profile">
						<img src="img/Profile.png" />
						{window.location.pathname ==="/swipe" ? <img src="img/Rectangle.png" className="rectangle" /> : null}
					</a>
					<a href="/matches" className="navbar" alt="match">
						<img src="img/Match.png" />
						{window.location.pathname ==="/match" ? <img src="img/Rectangle.png" className="rectangle" /> : null}
					</a>
					<a href="/chat" className="navbar" alt="chat">
						<img src="img/chat.png" />
						{window.location.pathname ==="/chat" ? <img src="img/Rectangle.png" className="rectangle" /> : null}
					</a>
				</div>
			</div>
		)
	}
}

export default Navbar