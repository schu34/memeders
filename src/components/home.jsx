import React, { Component } from 'react';
import Swipeable            from 'react-swipeable';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageIdx: 0,
            memes: ["https://tr2.cbsistatic.com/hub/i/2017/05/30/bf63d9d4-0cfe-423c-935e-df4fa858c592/ae6197c296d559914c4d10479929ed09/maury-meme.jpg","https://tr4.cbsistatic.com/hub/i/2017/07/20/f228b170-e59c-43f2-9434-b6dca616fdb3/5579802f94eaa44b5598b71858e8c3a1/mmbosnr.png","https://tr3.cbsistatic.com/hub/i/2017/07/20/0603d40f-b6a4-4c7f-9d4d-c0bab07ba15c/ca64ba44cc8a5738d18be4114378869b/cqfrj5sc3isleagzcpvzqvsgbs66isjdkmlphpyzf1y.jpg","https://tr2.cbsistatic.com/hub/i/r/2017/07/20/f0a55ca3-aa93-4b46-9f08-ae469a9d9399/resize/x577/9361ae7ec20cb9601f4789d00dbe9db0/sxr8apmku05i3ny31mbh74j6luh0hw-wecoyjitrkbi.jpg","https://tr4.cbsistatic.com/hub/i/2017/03/23/4ac322eb-70af-46fe-b5f6-f510028f6ea2/2e57c9b2e0032386038575ff2475a6e4/sorry-i-annoyed-you-with-question-about-feature.jpg"],
        }

        this.onSwipedRight = this.onSwipedRight.bind(this);
        this.onSwipedLeft  = this.onSwipedLeft.bind(this);
    }

    onSwipedRight(){
        const right = 1;
    }

    onSwipedLeft(){
        const left = -1;
    }

    saveSwipe(){}

    render () {

        const { imageIdx = 0 } = this.state;
        const imageStyles = {
          width: '414px',
          height: '580px',
          backgroundImage: `url(${this.state.memes[imageIdx]})`,
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