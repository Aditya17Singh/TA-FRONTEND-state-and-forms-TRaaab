import React from "react";
import Cart from "./Cart";
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pro: [],
      sortedArr: [],
    };
  }
  handleSlide = (p, index) => {
    this.setState({
      pro: [...this.state.pro, p],
    });
  };
  handleNew = (event) => {
    this.setState({
      sortedArr: [
        event.target.value === "low-to-high"
          ? this.props.info.sort((a, b) => b.price - a.price)
          : event.target.value === "high-to-low"
          ? this.props.info.sort((a, b) => a.price - b.price)
          : event.target.value === "All"
          ? this.props.info
          : "",
      ],
    });
  };
  render() {
    return (
      <>
        <div className="relative">
          <div className="select flex">
            <div className="p-length ">{this.props.info.length}Product</div>
            <div className="flex-10">
              <select placeholder="select" onChange={this.handleNew}>
                <option value="All">Select</option>
                <option value="high-to-low">Lowest To Highest</option>
                <option value="low-to-high"> Highest To Lowest</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex wrap flex-70 justify">
          {this.props.info.map((p, index) => (
            <div className="card flex-30">
              <div className="relative">
                <img
                  className="width"
                  src={`./static/products/${p.sku}_1.jpg`}
                  alt={p.id}
                />
                {p.isFreeShipping ? (
                  <button className="free">Free Shipping</button>
                ) : (
                  ""
                )}
              </div>
              <p className="title">{p.title}</p>
              <p className="pr">
                {p.currencyFormat}
                <span className="price">{p.price}</span>
              </p>
              <div className="btn-center">
                <button
                  onClick={() => this.handleSlide(p, index)}
                  className="btn-primary"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Cart cart={this.state.pro} />
        </div>
      </>
    );
  }
}
export default Products;
