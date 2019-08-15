import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'
import Img from "gatsby-image"

function ProductTemplate(props) {
  console.log("Props: ", props.data)
  let product = props.data.stripeSku
  return (
    <Layout>
      <h1>{product.attributes.name}</h1>
        <Img fluid={product.localFiles[0].childImageSharp.fluid}/>
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