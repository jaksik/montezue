import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Row, Col } from 'reactstrap';

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Checkout from "../components/checkout"
import "./index.css"

const IndexPage = ({ data }) => {
  console.log(data);
  
  return (
    <Layout>
      <SEO title="Home" />
      <div className="cover">
        <div id="cover-img">
          <div id="cover-overlay"></div>
            <div id="cover-text">
                <h1><strong>Montezue</strong></h1>
              </div>          
          </div> 
      </div>
      <div className="content">
        <Checkout />
      </div>
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