import React from "react";

class Billing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      address: "",
      postal: "",
      city: "",
      country: "",
      error: {
        address: "",
        postal: "",
        city: "",
        country: "",
      },
    };
  }
  handleCheck = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  handleChange = ({ target }) => {
    let { name, value } = target;
    let errors = this.state.error;
    switch (name) {
      case "address":
        errors.address =
          value.length < 8 ? "You must need to enter 8 char" : "";
        break;
      case "postal":
        errors.postal = value.length < 8 ? "You must need to enter 8 char" : "";
        break;
      case "city":
        errors.city = value.length < 8 ? "You must need to enter 8 char" : "";
        break;
      case "country":
        errors.country =
          value.length < 8 ? "You must need to enter 8 char" : "";
        break;
      default:
        break;
    }

    this.setState({ [name]: value });
  };
  render() {
    let { address, postal, city, country } = this.state.error;
    return (
      <>
        <h1>Controlled Component</h1>
        <div className="flex container">
          <div className="flex-40 card">
            <h2>Shipping Address</h2>
            <label>Address</label>
            <input
              placeholder="e.g New Delhi Vasant Vihar"
              name="address"
              className={address && "error"}
              onChange={this.handleChange}
            />
            <span className={address && "add"}>{address}</span>
            <label>ZIP/Postal Code</label>
            <input
              placeholder="e.g 176218"
              name="postal"
              onChange={this.handleChange}
              className={postal && "error"}
            />
            <span className={postal && "add"}>{postal}</span>
            <label>City</label>
            <input
              placeholder="e.g New Delhi"
              name="city"
              onChange={this.handleChange}
              className={city && "error"}
            />
            <span className={city && "add"}>{city}</span>
            <label>Country</label>
            <input
              placeholder="e.g India"
              name="country"
              onChange={this.handleChange}
              className={country && "error"}
            />
            <span className={country && "add"}>{country}</span>
          </div>
          <div className="flex-40 card">
            <h2>Billing Address</h2>
            <span className="flex span">
              <input
                className="checkbox"
                type="checkbox"
                onClick={this.handleCheck}
              />
              <h3>Same as the Shipping Address?</h3>
            </span>
            <label>Address</label>
            <input
              placeholder="e.g New Delhi Vasant Vihar"
              value={this.state.show ? this.state.address : ""}
            />
            <label>ZIP/Postal Code</label>
            <input
              placeholder="e.g 176218"
              value={this.state.show ? this.state.postal : ""}
            />
            <label>City</label>
            <input
              placeholder="e.g New Delhi"
              value={this.state.show ? this.state.city : ""}
            />
            <label>Country</label>
            <input
              placeholder="e.g India"
              value={this.state.show ? this.state.country : ""}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Billing;
