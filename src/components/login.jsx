import React, { Component } from "react";
import { url, client } from "../utils/axiosconfig";
import { Redirect } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, username: "" };
    this.onChange = this.onChange.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }

  onChange(e) {
    this.setState({ username: e.target.value });
  }

  login(e) {
    client.get(url + "/login/" + this.state.username).then(res => {
      console.log(res);
      if (res.status === 200) this.setState({ redirect: true });

      localStorage.setItem("user_id",res.data.user.user_id)
    });
  }

  signup(e) {
    client
      .get(url + "/signup/" + this.state.username)
      .then(this.setState({ message: "account created, you can now login" }))
      .catch(err => {
        console.log("err", err);
        this.setState({ message: "account already exists, you can login" });
      });
  }

  render() {
    if (this.state.redirect) return <Redirect to="/swipe" push/>;
    return (
      <div className="login-container">
        enter your username:

        <br/>

        {this.state.message || null}
        <input
          type="text"
          value={this.state.username}
          onChange={this.onChange}
          className="login-input"
        />
        <button className="login-button" onClick={this.login}>login</button>
        <button className="login-button" onClick={this.signup}>signup</button>
      </div>
    );
  }
}

export default Login;
