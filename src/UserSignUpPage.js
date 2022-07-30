import React from "react";

class UserSignUpPage extends React.Component {
  //Appin son state'ini bize verecek olan fonksiyon. App'te, tarayıcıda console'da hali hazırda state kısmı bulunur.
  state = {
    username: null,
    displayName: null,
    password: null,
    rePassword: null,
  };

  onChange = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    this.setState({
      [field]: value,
    });
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
        <button>Sign Up</button>
      </form>
    );
  }
}

export default UserSignUpPage; //index.js'te kullanabilmek için. Her class'ın export edilmesi beklenir.
