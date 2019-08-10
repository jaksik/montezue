import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Row, Col } from 'reactstrap';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cart from '../components/cart'
import Skus from '../components/Products/Skus'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/index.css"

const IndexPage = ({ data }) => {
  console.log(data);
  
  return (
    <Layout>
      <SEO title="Home" />

        <h1>Shop all products</h1>
        <Cart>
          <Skus />
        </Cart>

    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query {
  placeholderImage: file(relativePath: { eq: "cover.jpg" }) {
    childImageSharp {
      fluid(quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}

`