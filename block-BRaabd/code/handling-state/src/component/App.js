import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
    };
  }
  handleChange = (elm) => {
    this.setState({
      img: elm,
    });
  };
  render() {
    let arr = ["basketball", "cricket", "laptop", "phone", "tiger"];
    return (
      <>
        <img
          src={`./assets/${this.state.img}.jpg`}
          height="200px"
          alt={this.state.img}
        />
        {arr.map((elm) => (
          <button className={this.state.img === elm ? 'active' : ""} onClick={() => this.handleChange(elm)}>
            {elm}
          </button>
        ))}
      </>
    );
  }
}

export default App;
