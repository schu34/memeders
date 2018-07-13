import React, { Component }		from 'react';
import Navbar 					from './components/navbar.jsx';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render () {

        return (
        	<div>
        		<img src="img/memederz.png" className="memederz"/>
        		{this.props.children}
        		<Navbar  />
        	</div>
        )
    }
}

export default App