import data from "../data.json";
import React from "react";
import Menu from "./Menu";

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: "",
    };
  }
  handleChange = (elm) => {
    this.setState({
      menu: elm,
    });
  };
  render() {
    let everyone;
    if (!this.state.menu) {
      everyone = data.map((ev) => ev);
    } else {
      everyone = data.filter((elm) => elm.category === this.state.menu);
    }
    let category = data.reduce((acc, cv, i, arr) => {
      acc.push(cv.category);
      return acc;
    }, []);
    let m = category.filter((elm, i, a) => a.indexOf(elm) === i);
    return (
      <>
        <div className="align-center">
          <button className={this.state.menu === "" ? "active" : ""} onClick={() => this.handleChange("")}>All</button>
          {m.map((elm, i, arr) => (
            <button className={this.state.menu === elm ? "active" : ""} onClick={() => this.handleChange(elm)}>
              {elm}
            </button>
          ))}
        </div>
        <Menu info={everyone} />
      </>
    );
  }
}

export default Tags;
