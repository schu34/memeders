import React, { Component } 				from 'react';
import { client, 
		 url }        						from '../utils/axiosconfig.js';
import { Redirect } 						from 'react-router';

class Matches extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading:    true,
			redirect: 	false
		}
	} 

	MatchtoChat(user_id, user_name) {
		localStorage.setItem('other_id', user_id)
		localStorage.setItem('other_name', user_name)
		this.setState({
			redirect: 	    true
		})
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

	if(this.state.redirect === true ) {
		return(
		 	<Redirect to="/chat" push />
		)
	}
		return(
			this.state.loading ? "loading" :
			<div>
				<div className="matches-container">
					{users.map((user, index) => {
					return(
						<div onClick={() => this.MatchtoChat(user.user_id, user.user_name)} className="matches-div" key={index}>
						<p className="match-names"></p>{user.user_name}</div>
					)})}
				</div>
			</div>
		)
	}
}

export default Matches