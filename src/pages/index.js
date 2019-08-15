import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Row, Col } from 'reactstrap';

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Cart from '../components/addToCart'
import Skus from '../components/Products/Skus'
import PreviewRow from "../components/previewRow"
import info from "../data/landing.json"
import Carousel from "../components/carousel"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/index.css"

const IndexPage = ({ data }) => {
  console.log(data);
  
  return (
    <Layout>
      <SEO title="Home" />
      {/* <Img fluid={data.placeholderImage.childImageSharp.fluid} /> */}
      <Carousel/>
      <div className="cover">
        <div id="cover-img">
          <div id="cover-overlay"></div>
            <div id="cover-text">
                <h1><strong>Welcome</strong></h1>
              </div>          
          </div> 
      </div>

      <div className="content">

        {/* Displays */}
        {/* {info.map(item => (
          <PreviewRow data={item}/>
        ))} */}

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