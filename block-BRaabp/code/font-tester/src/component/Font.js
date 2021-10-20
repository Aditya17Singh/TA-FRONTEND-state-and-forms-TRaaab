import React from "react";
class Font extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      font: "",
      size: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      font: event.target.value,
    });
  };
  handleRange = (event) => {
    this.setState({
      size: event.target.value,
    });
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="flex">
            <input
              className="flex-40"
              onChange={this.handleChange}
              type="text"
            />
            <label className="flex-30">{`${this.state.size}px`}</label>
            <input
              type="range"
              min="1"
              max="100"
              onChange={this.handleRange}
              className="slider flex-30"
            />
          </div>
          <div className="flex wrap">
            <div className="card flex-30">
              <div className="flex">
                <h2>Roboto</h2>
                <h2>12 Styles</h2>
              </div>
              <h3>Christian Robertson</h3>
              <p
                style={{ fontSize: `${this.state.size}px` }}
                className="roboto"
              >
                {this.state.font}
              </p>
            </div>
            <div className="card flex-30">
              <div className="flex">
                <h2>Potta One</h2>
                <h2>12 Styles</h2>
              </div>
              <h3>Christian Robertson</h3>
              <p style={{ fontSize: `${this.state.size}px` }} className="potta">
                {this.state.font}
              </p>
            </div>
            <div className="card flex-30">
              <div className="flex">
                <h2>Yusei Magic</h2>
                <h2>12 Styles</h2>
              </div>
              <h3>Christian Robertson</h3>
              <p style={{ fontSize: `${this.state.size}px` }} className="yusie">
                {this.state.font}
              </p>
            </div>
            <div className="card flex-30">
              <div className="flex">
                <h2>Fraunces</h2>
                <h2>12 Styles</h2>
              </div>
              <h3>Christian Robertson</h3>
              <p
                style={{ fontSize: `${this.state.size}px` }}
                className="fraunces"
              >
                {this.state.font}
              </p>
            </div>
            <div className="card flex-30">
              <div className="flex">
                <h2>Lato</h2>
                <h2>12 Styles</h2>
              </div>
              <h3>Christian Robertson</h3>
              <p style={{ fontSize: `${this.state.size}px` }} className="lato">
                {this.state.font}
              </p>
            </div>
            <div className="card flex-30">
              <div className="flex">
                <h2>Noto</h2>
                <h2>12 Styles</h2>
              </div>
              <h3>Christian Robertson</h3>
              <p style={{ fontSize: `${this.state.size}px` }} className="noto">
                {this.state.font}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Font;
