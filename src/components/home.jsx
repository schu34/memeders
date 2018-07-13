import React, { Component }       from 'react';
import Swipeable                  from 'react-swipeable';
import axios                      from 'axios';
import { url } from '../utils/axiosconfig.js';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meme: {},
            loading: true
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
        this.saveSwipe(left)
    }

    saveSwipe(swipeValue){
        let user_id = localStorage.getItem('user_id');
        let image_id = this.state.meme.id;

        this.setState({loading: true});
            this.getMeme();
        axios.get(`${url}/swipe/${user_id}/${image_id}/${swipeValue}`)
        .then((response) => {
            console.log("swipe was saved");
            this.setState()
        })
        .catch((err) => {console.log("saveSwipe error: ", err)});
    }

    getMeme(){
        axios.get(`${url}/meme`)
        // axios.get(`${url}/images/people/0fafdc033aaa708cdb509ea5df56ab38.jpg`)
        .then((meme) => {
            console.log("MEME: ", meme);
            axios.post("http://e8c69e01.ngrok.io/summary",{
                url: `${url}${meme.data.url}`
            }).then(summary=>{
                const {data} = summary

                let max = 0;
                let maxKey = "";
                Object.keys(data).forEach(key=>{
                    if(parseFloat(data[key]) > max){
                        max = parseFloat(data[key])
                        maxKey = key;
                    }
                })
                console.log(maxKey)
                this.setState({meme:meme.data, loading: false, tag: maxKey.split(" ")[0]});
            })



        })
        .catch((err) => {console.log("getMeme error: ", err)});
    }

    render () {

        const imageStyles = {
          width: '350px',
          height: '550px',
          margin: "auto",
          backgroundImage: `url(${url}${this.state.meme.url})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          'box-shadow': '0px 1px 1px 0px rgba(0,0,0,0.5)',
        };

        if(this.state.loading)return <div>loading...</div>
        return (
            <Swipeable
                preventDefaultTouchmoveEvent
                onSwipedRight={this.onSwipedRight}
                onSwipedLeft={this.onSwipedLeft} >
                    <div style={imageStyles}>
                    </div>
                    <p>{this.state.tag}</p>
            </Swipeable>
        )
    }
}

export default Home