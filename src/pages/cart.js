import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cart from '../components/cart'
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
query SkusForct {
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
        fields {
          slug
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