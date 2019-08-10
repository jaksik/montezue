import React from 'react'
import Layout from "../components/layout"
import { Row, Col } from "reactstrap"
import Checkout from '../components/advancedCheckout'
import { Link, graphql } from "gatsby"

const Cart = class extends React.Component {
  state = {
    cart: [],
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

  addToCart(newItem) {
    let itemExisted = false
    let updatedCart = this.state.cart.map(item => {
      if (newItem === item.sku) {
        itemExisted = true
        return { sku: item.sku, quantity: ++item.quantity }
      } else {
        return item
      }
    })
    if (!itemExisted) {
      updatedCart = [...updatedCart, { sku: newItem, quantity: 1 }]
    }
    this.setState({ cart: updatedCart })
    // Store the cart in the localStorage.
    localStorage.setItem('stripe_checkout_items', JSON.stringify(updatedCart))
  }

  render() {
    console.log("cart: ", this.state.cart)
    return (
      <Layout>
        <Checkout cart={this.state.cart} />
        {this.state.cart.map(item => {
            return (
                <Row className="no-gutters">
                    <Col xs={4}>
                        <img/>
                    </Col>
                    <Col xs={8}>
                        <p>{item.sku}</p>
                    </Col>
                </Row>
            )
        })}
      </Layout>
    )
  }
}

export default Cart

//Query skus, filter skus in cart
export const query = graphql`
query SkusForProduc {
  skus: allStripeSku(
    filter: { product: { id: { eq: "prod_EGl7ZnT96XrPf6" } } }
    sort: { fields: [price] }
  ) {
    edges {
      node {
        id
        currency
        price
        attributes {
          name
        }
      }
    }
  }
}
`