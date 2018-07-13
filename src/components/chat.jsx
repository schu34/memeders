import React, { Component }                         from 'react';
import {url, client} from "../utils/axiosconfig.js"

class Chat extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount(){
		const userid  = localStorage.getItem("user_id");
		const otherId = localStorage.getItem("other_id");
		
		client.get(`${url}/chat/${userid}/${otherId}`)
			.then(res=>{
				console.log(res.data);
			})
	}

	render () {
		return(
			<div>
				
			</div>
		)
	}
}

export default Chat