import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get(`/chat/`)
      .then(chat=>console.log(chat))
  }

  render() {
    return <div />;
  }
}

export default Matches;
