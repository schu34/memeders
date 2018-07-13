import React, { Component } 				from 'react';
import { client, 
		 url }        						from '../utils/axiosconfig.js';

class Matches extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading:    true
		}
	} 

	componentDidMount(){
		return client.get(`${url}/matches/generateduserid1/`)
			.then(res => {
				this.setState ({
					loading:   false,
					users: 	   res.data
				})
				console.log("RES", res)
			})
	}


	render () {

	const {
		users 
	} = this.state;
	console.log("USERS", users)
		return(
			this.state.loading ? "loading" :
			<div>
				<div className="matches-container">
					{users.map((user, index) => {
					return(
						<div className="matches-div" key={index}>
						<p className="match-names"></p>{user.user_name}</div>
					)})}
				</div>
			</div>
		)
	}
}

export default Matches