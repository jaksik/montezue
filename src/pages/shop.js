import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Row, Col } from 'reactstrap';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cart from '../components/addToCart'
import Skus from '../components/Products/Skus'
import Collapse from "../components/collapse"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/index.css"

const IndexPage = ({ data }) => {
  console.log(data);
  
  return (
    <Layout>
      <SEO title="Home" />
        <Collapse/>
        <div className="page-container">
          <h1>Shop Montezue</h1>
          
        </div>
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