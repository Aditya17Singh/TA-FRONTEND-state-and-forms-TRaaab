import React from "react";

class Validation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paw: "",
      cpaw: "",
      errors: {
        username: "",
        email: "",
        password: "",
        cpassword: "",
      },
    };
  }
  validateEmail = (value) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  };
  handleInput = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.errors;
    switch (name) {
      case "username":
        errors.username =
          value.length < 3 ? "username must be at least 3 char" : "";
        break;
      case "email":
        errors.email = this.validateEmail(value) ? "" : "Email is not valid";
        break;
      case "paw":
        errors.password =
          this.state.paw.length < 6
            ? "Password must be atleast 6 characters"
            : "";
        break;
      case "cpaw":
        errors.cpassword =
          this.state.paw !== this.state.cpaw ? "Pss2 is req" : "";
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };
  render() {
    let { username, email, password, cpassword } = this.state.errors;
    return (
      <>
        <div className="card">
          <h1>Register With Us</h1>
          <form>
            <div>
              <label>Username</label>
              <input
                placeholder="Enter Username"
                className={username && "error"}
                type="text"
                name="username"
                onChange={this.handleInput}
              />
            </div>
            <span>{username}</span>
            <div>
              <label>Email</label>
              <input
                className={email && "error"}
                type="text"
                name="email"
                onChange={this.handleInput}
              />
            </div>
            <span>{email}</span>
            <div>
              <label>Password</label>
              <input
                className={password && "error"}
                type="password"
                name="paw"
                onChange={this.handleInput}
              />
            </div>
            <span>{password}</span>
            <div>
              <label>Confirm Password</label>
              <input
                className={cpassword && "error"}
                type="password"
                name="cpaw"
                onChange={this.handleInput}
              />
            </div>
            <span>{cpassword}</span>
            <button className="border-2 border-purple-500 hover:border-gray-500">
              <input className="block border" type="submit" />
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Validation;
