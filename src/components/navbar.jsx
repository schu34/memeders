import React, { Component } 				from 'react';
import { Link } 							from 'react-router-dom';

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
			<div className="navbar-container">
				<table className="navbar-table">
				  <tr>
				    <th className="left">
				    	<Link to="/swipe" >
							<img src="img/Profile.png" className="navbar-pics" />
						</Link>
					</th>
				    <th className="mid">
				    	<Link to="/matches">
							<img src="img/Match.png" className="navbar-pics" />
						</Link>
					</th>
				    <th className="right">
				    	<Link to="/chat">
							<img src="img/chat.png" className="navbar-pics"/>
						</Link>
					</th>
				  </tr>
				  <tr>
				    <td>{window.location.pathname ==="/swipe" ? <img src="img/Rectangle.png" className="rectangle" /> : null}</td>
				    <td>{window.location.pathname ==="/matches" ? <img src="img/Rectangle.png" className="rectangle" /> : null}</td>
				    <td>{window.location.pathname ==="/chat" ? <img src="img/Rectangle.png" className="rectangle" /> : null}</td>
				  </tr>
				</table>	
			</div>
		)
	}
}

export default Navbar