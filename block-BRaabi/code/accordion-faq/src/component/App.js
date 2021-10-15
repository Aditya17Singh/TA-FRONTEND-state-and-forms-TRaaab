import React from "react";
import data from "../data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faq: "",
      show: false,
    };
  }
  arrow = (i) => {
    this.setState({
      faq: i,
      show: !this.state.show,
    });
  };
  render() {
    return (
      <>
        <div className="container">
          {data.map((elm, i) => (
            <div className="elm">
              {elm.Q}
              <span onClick={() => this.arrow(i)} className="arrow">
                {this.state.show && i === this.state.faq ? (
                  <i class="fas fa-hand-point-up"></i>
                ) : (
                  <i className="fas fa-hand-point-down"></i>
                )}
              </span>
              <span className="hide">
                {this.state.show && i === this.state.faq ? elm.A : null}
              </span>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default App;
