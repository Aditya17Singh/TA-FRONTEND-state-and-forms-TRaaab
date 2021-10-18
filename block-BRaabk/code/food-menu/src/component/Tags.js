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
  render() {
    let category = data.reduce((acc, cv, i, arr) => {
      acc.push(cv.category);
      return acc;
    }, []);
    let m = category.filter((elm, i, a) => {
      if (a.indexOf(elm) === i) {
        return elm;
      }
      
    });
    return (
      <>
        <div className="align-center">
          <button>All</button>
          {m.map((elm, i, arr) => (
            <button>{elm}</button>
          ))}
        </div>
        <Menu info={data} />
      </>
    );
  }
}

export default Tags;
