import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Row, Col } from 'reactstrap';
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cart from '../components/cart'
import Checkout from "../components/advancedCheckout"
import Skus from '../components/Products/Skus'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/index.css"

const IndexPage = ({ data }) => {
  console.log("data: ", data);
  console.log("image: ", data.skus.edges[0].node.localFiles[0].childImageSharp.fluid);
  let image = data.skus.edges[0].node.localFiles[0].childImageSharp.fluid;
  return (
    <Layout>
      <SEO title="Home" />
      {/* <Img fluid={image} /> */}

          <div className="page-container">
          <Cart skus={data} />
          </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query SkusForPrdu {
  skus: allStripeSku(
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
        localFiles {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}

`