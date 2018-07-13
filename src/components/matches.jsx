import React, { Component } 				from 'react';
import Moment 								from 'moment';

class Matches extends Component {
	constructor(props) {
		super(props);
	}



	render () {
		return(
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