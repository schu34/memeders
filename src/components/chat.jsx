import React, { Component } from "react";
import { url, client } from "../utils/axiosconfig.js";
import { ChatFeed, Message } from "react-chat-ui";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      message: ""

    };
    this.onChange = this.onChange.bind(this);
    this.updateChat = this.updateChat.bind(this);
    this.onSend = this.onSend.bind(this);
  }

  componentDidMount() {
    const userid = localStorage.getItem("user_id");
    const otherId = localStorage.getItem("other_id");

    this.setState({
      userid,
      otherId
    })
    
    this.updateChat();
  }
  updateChat(){
    return client.get(`${url}/chat/${this.state.userid}/${this.state.otherId}`).then(res => {

      console.log(res.data);
      this.setState({
        messages: res.data.messages.map(message => {
          return new Message({
            id: message.sender === this.state.userid ? 0 : 1,
            message: message.text
          });
        }),
        loading: false
      });
      setTimeout(this.updateChat, 500);
    });
  }

  onSend(e) {
    client.post(`${url}/chat`, {
      message: this.state.message,
      sender: this.state.userid,
      reciever: this.state.otherId,
    });
    // this.setState(oldState=>{
    //   const ret = Object.assign({}, oldState);
    //   ret.messages.push(new Message({
    //     id: 0,
    //     message: oldState.messages
    //   }))
    //   return ret;
    // })
    this.setState({
      sending: true,
      message: "",
    })
  }

  onChange(e){
    this.setState({message: e.target.value})
  }

  render() {
    console.log(this.state.messages);
    return this.state.loading ? (
      "loading"
    ) : (
      <div className ='chat-container'>
        <ChatFeed messages={this.state.messages} />
        <div className="chat-input-container">
          <input onChange={this.onChange} value={this.state.message} type="text"/>
          <button onClick={this.onSend}>send</button>
        </div>
      </div>
    );
  }
}

export default Chat;
