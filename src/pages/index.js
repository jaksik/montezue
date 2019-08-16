import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
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
      {/* <div className="cover">
        <div id="cover-img">
          <div id="cover-overlay"></div>
            <div id="cover-text">
                <h1><strong>Welcome</strong></h1>
              </div>          
          </div> 
      </div> */}

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