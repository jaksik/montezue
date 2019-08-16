import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import Img from "gatsby-image"
import Cart from "../components/addToCart"

function ProductTemplate(props) {
  console.log("Props: ", props.data)
  let product = props.data.stripeSku
  return (
    <Layout>
      <h2>{product.attributes.name}</h2>
      <p>${product.price}</p>
      <p><strong>*****</strong></p>
        <Img fluid={product.localFiles[0].childImageSharp.fluid}/>
        <button>Add to Cart</button>
    </Layout>
  )
}

export default ProductTemplate

export const pageQuery = graphql`
query ProductQuery($slug: String!) {
  stripeSku(fields: {slug: {eq: $slug}}) {
   attributes {
     name
   }
   id
   price
   localFiles {
    childImageSharp {
      fluid(quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  }
}
`