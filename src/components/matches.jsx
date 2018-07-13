import React, { Component } 				from 'react';
import Moment 								from 'moment';
import axios 								from 'axios';
import { client, url }        					from '../utils/axiosconfig.js';

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
				this.setState = {
					loading:   false
				}
				console.log("RES", res)
			})
	}


	render () {
		return(
			this.state.loading ? "loading" :
			<div>
				<div className="matches-container">
					<div className="matches-div"></div>
					<div className="matches-div"></div>
					<div className="matches-div"></div>
					<div className="matches-div"></div>
					<div className="matches-div"></div>
				</div>
			</div>
		)
	}
}

export default Matches