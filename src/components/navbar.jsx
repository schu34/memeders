import React, { Component } 				from 'react';
import { Col, Row, Grid }           		from 'react-bootstrap';

class Navbar extends Component {
	constructor(props) {
		super(props);
	}

	render () {
		return(
			<div>
				<Grid>
					<Row>
						<Col xs={2}>
							<a href="/home" className="navbar">
								<img src="img/Profile.png" />
							</a>
						</Col>
						<Col xs={2}>
							<a href="/matches" className="navbar">
								<img src="img/Match.png" />
							</a>
						</Col>
						<Col xs={2}>
							<a href="/chat" className="navbar">
								<img src="img/chat.png" />
							</a>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

export default Navbar