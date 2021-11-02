import React from "react";
import Cart from "./Cart";
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pro: [],
    };
  }
  // componentDidUpdate() {
  //   this.handleLocalStorage();
  // }
  // handleCartLength = () => {
  //   let totalQuantity = this.state.pro.reduce((acc, cv) => {
  //     console.log(acc);
  //     acc = acc + cv.quantity;
  //     console.log(acc);
  //     return acc;
  //   }, 0);
  // };

  componentDidMount() {
    if (localStorage.carts) {
      this.setState({ pro: JSON.parse(localStorage.carts) || [] });
    }
    window.addEventListener("beforeunload", this.handleLocalStorage);
  }
  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.handleLocalStorage);
  }
  handleLocalStorage = () => {
    localStorage.setItem("carts", JSON.stringify(this.state.pro));
  };

  handleAddtocart = (p) => {
    let id = p.id;
    if (this.state.pro.some((elm) => elm.id === id)) {
      return this.handleincrement(id);
    }
    p.quantity = 1;
    this.setState((prevState) => {
      return { pro: [...prevState.pro, p] };
    });
  };
  handleCheckout = () => {
    alert(
      this.state.pro.reduce((acc, cv) => {
        acc = Math.floor((cv.price * cv.quantity) + acc);
        return acc;
      }, 0)
    );
  };

  handleincrement = (id) => {
    this.setState((prevState) => {
      let products = prevState.pro.map((elm) => {
        if (elm.id === id) {
          elm.quantity = elm.quantity + 1;
          return elm;
        } else {
          return elm;
        }
      });
      return {
        pro: products,
      };
    });
  };
  handledecrement = (id) => {
    this.setState((prevState) => {
      let products = prevState.pro.map((elm) => {
        if (elm.id === id) {
          elm.quantity = elm.quantity - 1;
          return elm;
        } else {
          return elm;
        }
      });
      return {
        pro: products,
      };
    });
  };

  handleNew = (event) => {
    this.setState({
      sortedArr: [
        event.target.value === "low-to-high"
          ? this.props.info.sort((a, b) => b.price - a.price)
          : event.target.value === "high-to-low"
          ? this.props.info.sort((a, b) => a.price - b.price)
          : "",
      ],
    });
  };
  handleDelete = (id) => {
    this.setState((prevState) => {
      return {
        pro: prevState.pro.filter((elm) => {
          if (elm.id === id) {
            return false;
          } else {
            return true;
          }
        }),
      };
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
                  onClick={() => this.handleAddtocart(p, index)}
                  className="btn-primary"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Cart
            cart={this.state.pro}
            handleincrement={this.handleincrement}
            handledecrement={this.handledecrement}
            handleDelete={this.handleDelete}
            handleCheckout={this.handleCheckout}
          />
        </div>
      </>
    );
  }
}
export default Products;
