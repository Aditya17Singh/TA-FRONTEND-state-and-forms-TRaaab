import React from "react";
import data from "../data.json";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mov: "",
      show: false,
    };
  }
  modal = (i) => {
    this.setState({
      mov: i,
      show: !this.state.show,
    });
  };
  cross = () => {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    return (
      <>
        <h1>Movie App</h1>
        <div className="container flex justify wrap">
          {data.map((d, i) => (
            <>
              <div className="flex-25 card">
                <img src={`${d.Poster}`} alt={d.Title} />
                <div className="flex">
                  <h2 className="title flex-45">{d.Title}</h2>
                  <button className="btn flex-45" onClick={() => this.modal(i)}>
                    More Info
                  </button>
                </div>
                <span className="date">{d.Released}</span>
              </div>
              {this.state.show && this.state.mov === i ? <ul className="modal">
                <div className="flex">
                <li>{d.Year}</li>
                <span onClick={() => this.cross()} className="cross">
                 ❌
                </span>
                </div>
                <li>RunTime - {d.Runtime}</li>
                <li>Genre- {d.Genre}</li>
                <li>
                  Writer- {d.Writer}
                  Director- {d.Director}
                </li>
                <li>Actors- {d.Actors}</li>
                <li>Award - {d.Awards}</li>
                <li>Rating- {d.imdbRating}</li>
                <li>Type-{d.Type}</li>
                <li>Response- {d.Response}</li>
                <div className="flex wrap images">
                  {d.Images.map((image) => (
                    <div className="flex-25">
                      <img className="image-width-modal " src={`${image}`} alt={image} />
                    </div>
                  ))}
                </div>
              </ul> : null}
            </>
          ))}
        </div>
      </>
    );
  }
}

export default List;
