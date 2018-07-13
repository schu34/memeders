import React, { Component }                         from 'react';
import Swipeable from 'react-swipeable'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memes: [],
        }

        this.onSwipedRight = this.onSwipedRight.bind(this);
        this.onSwipedLeft  = this.onSwipedLeft.bind(this);
    }

    onSwipedRight(){}

    onSwipedLeft(){}

    render () {
        return (
            <Swipeable
                preventDefaultTouchmoveEvent
                onSwipedRight={this.onSwipedRight}
                onSwipedLeft={this.onSwipedLeft} >
            </Swipeable>
        )
    }
}

export default Home