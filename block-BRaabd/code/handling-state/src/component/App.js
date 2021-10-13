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
    return (
      <>
        <img
          src={`./assets/${this.state.img}.jpg`}
          height="200px"
          alt={this.state.img}
        />
        {["basketball", "cricket", "laptop", "phone", "tiger"].map((elm) => (
          <button onClick={() => this.handleChange(elm)}>{elm}</button>
        ))}
      </>
    );
  }
}

export default App;
