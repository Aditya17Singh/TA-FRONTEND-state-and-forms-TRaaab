import React from "react";

class Multiform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      multi: 0,
    };
  }
  handleIncrement = () => {
    this.setState({
      multi: this.state.multi + 1,
    });
  };
  handleDecrement = () => {
    this.setState({
      multi: this.state.multi - 1,
    });
  };
  render() {
    return (
      <>
        {this.state.multi === 0 ? (
          <div className="card container flex">
            <div className="flex-40 object">
              <img className="image" src="../assetss/form-1.png" alt="form" />
            </div>
            <div className="flex-50 sign-up">
              <div className="flex">
                <div className="">
                  <span className={this.state.multi === 0 ? "active" : ""}>
                    1
                  </span>
                  <span>Sign Up</span>
                </div>
                <div>
                  <span>2</span>
                  <span>Message</span>
                </div>
                <div>
                  <span>3</span>
                  <span>Checkbox</span>
                </div>
              </div>
              <div className="form-control">
                <span className="step">Step</span>
                <span className="step">1</span>
                <span className="step">/3</span>
                <h2>Sign Up</h2>
                <form>
                  <div className="flex wrap">
                    <div className="flex-20">
                      <label>First Name</label>
                      <input type="text" />
                    </div>
                    <div className="flex-20">
                      <label>Last Name</label>
                      <input type="text" />
                    </div>
                    <div className="flex-20">
                      <label>Date Of Birth</label>
                      <input type="date" />
                    </div>
                    <div className="flex-20">
                      <label>Email</label>
                      <input type="email" />
                    </div>
                  </div>
                  <div>
                    <label>Address</label>
                    <input type="text" />
                  </div>
                </form>
              </div>
              <div>
                <button onClick={this.handleIncrement} className="btn">
                  Next Step
                </button>
              </div>
            </div>
          </div>
        ) : this.state.multi === 1 ? (
          <div className="card container flex">
            <div className="flex-40 object">
              <img className="image" src="../assetss/form-1.png" alt="form" />
            </div>
            <div className="flex-50 sign-up">
              <div className="flex">
                <div className="">
                  <span>1</span>
                  <span>Sign Up</span>
                </div>
                <div>
                  <span className={this.state.multi === 1 ? "active" : ""}>
                    2
                  </span>
                  <span>Message</span>
                </div>
                <div>
                  <span>3</span>
                  <span>Checkbox</span>
                </div>
              </div>
              <div className="form-control">
                <span className="step">Step</span>
                <span className="step">
                  {this.state.multi === 1 ? "2" : ""}
                </span>
                <span className="step">/3</span>
                <h2>Message</h2>
                <form>
                  <div>
                    <label>Message</label>
                    <textarea />
                  </div>
                </form>
                <div className="flex align">
                  <span className="flex align flex-35">
                    <input type="checkbox" className="checkbox" />
                    <h3>The number one choice</h3>
                  </span>
                  <span className="flex align flex-35">
                    <input type="checkbox" className="checkbox" />
                    <h3>The number two choice</h3>
                  </span>
                </div>
              </div>
              <button onClick={this.handleDecrement} className="back">
                Back
              </button>
              <button className="btn" onClick={this.handleIncrement}>
                Next Step
              </button>
            </div>
          </div>
        ) : this.state.multi === 2 ? (
          <div className="card container flex">
            <div className="flex-40 object">
              <img className="image" src="../assetss/form-1.png" alt="form" />
            </div>
            <div className="flex-50 sign-up">
              <div className="flex">
                <div className="">
                  <span>1</span>
                  <span>Sign Up</span>
                </div>
                <div>
                  <span>2</span>
                  <span>Message</span>
                </div>
                <div>
                  <span className={this.state.multi === 2 ? "active" : ""}>
                    3
                  </span>
                  <span>Checkbox</span>
                </div>
              </div>
              <div className="form-control">
                <span className="step">Step</span>
                <span className="step">
                  {this.state.multi === 2 ? "3" : ""}
                </span>
                <span className="step">/3</span>
                <h2>Checkbox</h2>
                <form>
                  <div>
                    <span>
                      <i className="fas fa-snowman"></i>
                    </span>
                    <span>
                      <i class="fas fa-female"></i>
                    </span>
                  </div>
                </form>
                <div className="">
                  <span className="flex justify align">
                    <input type="checkbox" className="checkbox" />
                    <h3>I want to add this option</h3>
                  </span>
                  <span className="flex justify align">
                    <input type="checkbox" className="checkbox" />
                    <h3>
                      Let me click on this checkbox and choose some cool stuff
                    </h3>
                  </span>
                </div>
              </div>
              <button onClick={this.handleDecrement} className="back">
                Back
              </button>
              <button onClick={this.handleIncrement} className="btn">
                Submit
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}
export default Multiform;


