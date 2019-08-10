import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"

import Skus from "../components/Products/Skus"

const AdvancedExamplePage = ({ data }) => {
  console.log("data: ", data)
  return (
    <Layout>
      <SEO title="Advanced Example" />
      <h1>This is the advanced example</h1>
      <Skus />
    </Layout>
  )
}

export default AdvancedExamplePage;

//Query skus, filter skus in cart
export const query = graphql`
query SkusForProdu {
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