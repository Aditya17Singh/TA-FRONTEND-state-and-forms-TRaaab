import React from "react";
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  handleChange = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <>
        {this.state.show === false ? (
          <div>
            {" "}
            <div className="relative">
              <span onClick={this.handleChange} className="conditional-cart">
                <i class="fas fa-times"></i>
              </span>
            </div>
            <div className="cart">
              <div className="cart-logo relative">
                <i className="fas fa-cart-arrow-down"></i>
                <span>Cart</span>
                <div className="cart-count">{this.props.totalQuantity}</div>
              </div>
              {this.props.cart.map((elm) => (
                <div className="flex border-c item-center" key={elm.id}>
                  <div className="flex-20">
                    <img
                      className="width"
                      src={`./static/products/${elm.sku}_1.jpg`}
                      alt={elm.id}
                    />
                  </div>
                  <div className="flex-50 style">
                    {elm.title}
                    <div className="style-t"></div>
                    <div className="style-t">
                      {" "}
                      {elm.availableSizes[0]} | Sizes <br />
                      {elm.style}
                    </div>
                    <div className="style-t">Quantity: {elm.quantity}</div>
                    <div>
                      <button
                        onClick={() => this.props.handleincrement(elm.id)}
                      >
                        +
                      </button>
                      <button
                        onClick={() => this.props.handledecrement(elm.id)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className="flex-20 price-c">{elm.price}</div>
                  <div
                    onClick={() => this.props.handleDelete(elm.id)}
                    className="cross"
                  >
                    <i class="fas fa-times"></i>
                  </div>
                </div>
              ))}
              <div className="z-index">
                <div onClick={() => this.props} className="total">
                  Sub Total - 0
                </div>
                <div className="btn-div">
                  <button
                    onClick={() => this.props.handleCheckout()}
                    className="btn-checkout"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <span onClick={this.handleChange} className="conditional-cross">
            <i className="fas fa-cart-arrow-down cart-color"></i>
          </span>
        )}
      </>
    );
  }
}

export default Cart;
