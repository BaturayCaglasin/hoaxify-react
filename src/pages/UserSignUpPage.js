import React from "react";
import { signup } from "../api/apiCalls";
import { withTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
class UserSignUpPage extends React.Component {
  //Appin son state'ini bize verecek olan fonksiyon. App'te, tarayıcıda console'da hali hazırda state kısmı bulunur.
  state = {
    //key (label or field): value
    username: null,
    displayName: null,
    password: null,
    rePassword: null,
    pendingApiCall: false,
    errors: {},
  };

  onChange = (event) => {
    const { t } = this.props;
    const { name, value } = event.target;
    const errors = { ...this.state.errors };
    errors[name] = undefined;
    this.setState({
      [name]: value,
      errors,
    });
  };

  onClickSignUp = async (event) => {
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
        if (error.response.data.validationErrors) {
          this.setState({
            errors: error.response.data.validationErrors,
          });
        }
        this.setState({ pendingApiCall: false });
      });
  };

  onChangeLanguage = (language) => {
    const { i18n } = this.props;
    i18n.changeLanguage(language);
    changeLanguage(language); //axios'un genel dil ayarlarını değiştirir.
  };

  render() {
    const { pendingApiCall, errors } = this.state;
    const { username, displayName, password, rePassword } = errors;
    return (
      //Container: sağdan sola daha ortalı bir biçimde sayfayı düzenler.
      //text-center: text'i ortalar.
      //className= "form-group"
      //className= "form-control"
      //button className= "btn btn-primary"
      <div className="container">
        <form>
          <h1 className="text-center" text->
            {this.props.t("Sign Up")}
          </h1>
          <div className="form-group">
            <label>Username</label>
            <input
              name="username"
              className={username ? "form-control is-invalid" : "form-control"}
              onChange={this.onChange}
            ></input>
            <div className="invalid-feedback">{username}</div>
          </div>
          <div className="form-group">
            <label>Display Name</label>
            <input
              name="displayName"
              className={
                displayName ? "form-control is-invalid" : "form-control"
              }
              onChange={this.onChange}
            ></input>
            <div className="invalid-feedback">{displayName}</div>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className={password ? "form-control is-invalid" : "form-control"}
              onChange={this.onChange}
            ></input>
            <div className="invalid-feedback">{password}</div>
          </div>
          <div className="form-group">
            <label>Re-Password</label>
            <input
              name="rePassword"
              type="password"
              className={
                rePassword ? "form-control is-invalid" : "form-control"
              }
              onChange={this.onChange}
            ></input>
            <div className="invalid-feedback">{rePassword}</div>
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
          <div>
            <img
              src="https://flagcdn.com/20x15/tr.png"
              alt="Turkish Flag"
              onClick={() => this.onChangeLanguage("tr")}
            ></img>
            <img
              src="https://flagcdn.com/20x15/gb.png"
              alt="United Kingdom Flag"
              onClick={() => this.onChangeLanguage("gb")}
            ></img>
          </div>
        </form>
      </div>
    );
  }
}
//withTransaction() fonksiyonundan dönen başka bir fonksiyona UserSignUpPage parametresini verirsek;
const UserSignUpPageWithTranslation = withTranslation()(UserSignUpPage);

//export default withTransaction()(UserSignUpPage); //index.js'te kullanabilmek için. Her class'ın export edilmesi beklenir.
export default UserSignUpPageWithTranslation;
