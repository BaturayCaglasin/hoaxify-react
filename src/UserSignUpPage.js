import React from "react";
import axios from "axios";

class UserSignUpPage extends React.Component {
  //Appin son state'ini bize verecek olan fonksiyon. App'te, tarayıcıda console'da hali hazırda state kısmı bulunur.
  state = {
    //key (label or field): value
    username: null,
    displayName: null,
    password: null,
    rePassword: null,
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
    axios.post("/api/1.0/users", body);
  };

  render() {
    return (
      <form>
        <h1>Sign Up</h1>
        <div>
          <label>Username</label>
          <input name="username" onChange={this.onChange}></input>
        </div>
        <div>
          <label>Display Name</label>
          <input name="displayName" onChange={this.onChange}></input>
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            onChange={this.onChange}
          ></input>
        </div>
        <div>
          <label>Re-Password</label>
          <input
            name="rePassword"
            type="password"
            onChange={this.onChange}
          ></input>
        </div>
        <button onClick={this.onClickSignUp}>Sign Up</button>
      </form>
    );
  }
}

export default UserSignUpPage; //index.js'te kullanabilmek için. Her class'ın export edilmesi beklenir.
