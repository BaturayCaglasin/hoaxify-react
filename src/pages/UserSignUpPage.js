import React from "react";
import { signup } from "../api/apiCalls";

class UserSignUpPage extends React.Component {
  //Appin son state'ini bize verecek olan fonksiyon. App'te, tarayıcıda console'da hali hazırda state kısmı bulunur.
  state = {
    //key (label or field): value
    username: null,
    displayName: null,
    password: null,
    rePassword: null,
    pendingApiCall: false,
  };

  onChange = (event) => {
    //onChange fonksiyonu. onChange bir event alacak parametre olarak.
    const key = event.target.name;
    const value = event.target.value;
    this.setState({
      [key]: value,
    });
  };

  onClickSignUp = (event) => {
    event.preventDefault();

    const { username, displayName, password, rePassword } = this.state;
    const body = {
      username: username,
      displayName: displayName,
      password: password,
      rePassword: rePassword,
    };

    this.setState({ pendingApiCall: true });
    signup(body)
      .then((response) => {
        this.setState({ pendingApiCall: false });
      })
      .catch((error) => {
        this.setState({ pendingApiCall: false });
      });
  };

  render() {
    return (
      //Container: sağdan sola daha ortalı bir biçimde sayfayı düzenler.
      //text-center: text'i ortalar.
      //className= "form-group"
      //className= "form-control"
      //button className= "btn btn-primary"
      <div className="container">
        <form>
          <h1 className="text-center" text->
            Sign Up
          </h1>
          <div className="form-group">
            <label>Username</label>
            <input
              name="username"
              class="form-control"
              onChange={this.onChange}
            ></input>
          </div>
          <div className="form-group">
            <label>Display Name</label>
            <input
              name="displayName"
              class="form-control"
              onChange={this.onChange}
            ></input>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              onChange={this.onChange}
            ></input>
          </div>
          <div className="form-group">
            <label>Re-Password</label>
            <input
              name="rePassword"
              type="password"
              className="form-control"
              onChange={this.onChange}
            ></input>
          </div>
          <div className="text-center">
            <button
              className="btn btn-primary"
              onClick={this.onClickSignUp}
              disabled={this.state.pendingApiCall}
            >
              {this.state.pendingApiCall ? (
                <span className="spinner-border spinner-border-sm"></span>
              ) : (
                ""
              )}
              Sign Up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserSignUpPage; //index.js'te kullanabilmek için. Her class'ın export edilmesi beklenir.
