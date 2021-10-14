import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      step: null,
      max: null,
    };
  }
  select = (event) => {
    let r = Number(event.target.innerText);
    this.setState({
      step: r,
    });
  };
  max = (event) => {
    let m = Number(event.target.innerText);
    this.setState({
      max: m,
    });
    console.log(this.state.max);
  };
  handleIncrement = () => {
    this.setState({
      counter:
        this.state.step + this.state.counter > this.state.max
          ? this.state.counter
          : this.state.counter + this.state.step,
    });
  };
  handleDecrement = () => {
    this.setState({
      counter: this.state.step
        ? this.state.counter - this.state.step
        : this.state.counter - 1,
    });
  };
  reset = () => {
    this.setState({
      counter: 1,
    });
  };
  render() {
    var steps = [5, 10, 15];
    var max = [15, 100, 200];
    return (
      <>
        <h1>{this.state.counter}</h1>
        <h2>Steps</h2>
        <div>
          {steps.map((each) => (
            <button
              className={this.state.step === each ? "active" : ""}
              onClick={(event) => this.select(event)}
            >
              {each}
            </button>
          ))}
        </div>
        <div>
          {max.map((el) => (
            <button onClick={(event) => this.max(event)}>{el}</button>
          ))}
        </div>
        <button onClick={() => this.handleIncrement()}>Increment</button>
        <button onClick={() => this.handleDecrement()}>Decrement</button>
        <button onClick={() => this.reset()}>Reset</button>
      </>
    );
  }
}

export default App;
