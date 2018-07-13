import React, { Component }       from 'react';
import Swipeable                  from 'react-swipeable';
import axios                      from 'axios';
import { url } from '../utils/axiosconfig.js';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meme: {},
        }

        this.onSwipedRight = this.onSwipedRight.bind(this);
        this.onSwipedLeft  = this.onSwipedLeft.bind(this);
        this.saveSwipe     = this.saveSwipe.bind(this);
        this.getMeme       = this.getMeme.bind(this);
    }

    componentDidMount(){
        this.getMeme()
    }

    onSwipedRight(){
        console.log("swipred right");
        const right = 1;
        this.saveSwipe(right);
    }

    onSwipedLeft(){
        console.log("swipred left");
        const left = -1;
        this.saveSwipe(left);
    }

    saveSwipe(swipeValue){
        let user_id = localStorage.getItem('user_id');
        let image_id = this.state.meme.id;

        axios.get(`${url}/swipe/${user_id}/${image_id}/${swipeValue}`)
        .then((response) => {
            console.log("swipe was saved");
            this.setState()
        })
        .catch((err) => {console.log("saveSwipe error: ", err)});
    }

    getMeme(){
        // axios.get(`${url}/randomImage`)
        axios.get(`${url}/images/people/0fafdc033aaa708cdb509ea5df56ab38.jpg`)
        .then((meme) => {
            console.log("MEME: ", meme);
            this.setState({meme:meme.data});
        })
        .catch((err) => {console.log("getMeme error: ", err)});
    }

    render () {

        const imageStyles = {
          width: '414px',
          height: '580px',
          backgroundImage: `url(${this.state.meme.path})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        };

        return (
            <Swipeable
                preventDefaultTouchmoveEvent
                onSwipedRight={this.onSwipedRight}
                onSwipedLeft={this.onSwipedLeft} >
                    <div style={imageStyles}></div>
            </Swipeable>
        )
    }
}

export default Home