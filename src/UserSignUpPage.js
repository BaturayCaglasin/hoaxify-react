import React from "react";

class UserSignUpPage extends React.Component {
  //Appin son state'ini bize verecek olan fonksiyon. App'te, tarayıcıda console'da hali hazırda state kısmı bulunur.
  state = {
    username: null,
    displayName: null,
    password: null,
    rePassword: null,
  };

  onChangeUserName = (event) => {
    this.setState({
      username: event.target.value,
    });
    console.log(this.state);
  };

  onChangeDisplayName = (event) => {
    this.setState({
      displayName: event.target.value,
    });
    console.log(this.state);
  };

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
    console.log(this.state);
  };

  onChangeRePassword = (event) => {
    this.setState({
      rePassword: event.target.value,
    });
    console.log(this.state);
  };

  render() {
    return (
      <form>
        <h1>Sign Up</h1>
        <div>
          <label>Username</label>
          <input onChange={this.onChangeUserName}></input>
        </div>
        <div>
          <label>Display Name</label>
          <input onChange={this.onChangeDisplayName}></input>
        </div>
        <div>
          <label>Password</label>
          <input type="password" onChange={this.onChangePassword}></input>
        </div>
        <div>
          <label>Re-Password</label>
          <input type="password" onChange={this.onChangeRePassword}></input>
        </div>
        <button>Sign Up</button>
      </form>
    );
  }
}

export default UserSignUpPage; //index.js'te kullanabilmek için. Her class'ın export edilmesi beklenir.
