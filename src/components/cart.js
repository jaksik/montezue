import React from 'react'
import Checkout from "./advancedCheckout"

const Cart = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      productInfo: [],
    };
    this.removeItem = this.removeItem.bind(this);
  }
  
  

  componentDidMount() {
    // Get existing cart from localstorage if present.
    const existingCart = JSON.parse(
      localStorage.getItem('stripe_checkout_items')
    )
    if (existingCart && existingCart.length) {
      this.setState({ cart: existingCart })
    }
  }

  getCart() {
    return this.state.cart
  }

  removeItem(removedSku) {
    console.log("removed: ", removedSku)
    const cart = this.state.cart.filter(product => product.sku !== removedSku);
    console.log("new cart: ", cart)
    this.setState({ cart })
    console.log("new cart: ", this.state.cart);
    localStorage.setItem('stripe_checkout_items', JSON.stringify(cart))

  }

  render() {
    console.log("cat: ", this.state.cart)
    return (
      <div>
        {/* Map through skus filtering itmes in cart
        Bind functions to each item for deletion */}

        {this.state.cart.map(item => {

          return (
            <div>
              <p>{item.sku}</p>
              <button onClick={event => this.removeItem(item.sku)}>Remove From Cart</button>

              </div>
          )
        })}
        <Checkout cart={this.state.cart}/>
      </div>
    )
  }
}

export default Cart