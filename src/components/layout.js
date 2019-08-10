/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import Header from "./header"
import { Row, Col } from "reactstrap"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "cart.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Navbar fluid={data.placeholderImage.childImageSharp.fluid}/>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div
        style={{
          margin: `0 auto`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        {/* <footer style={{paddingTop:`200vh`}}>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.montezue.com">Montezue</a>
          <Row className="no-gutters">
            <Col xs={3} md={4}>
              <a>Terms Of Use</a>
            </Col>
            <Col xs={3} md={4}>
              <a>Terms Of Use</a>
            </Col>
            <Col xs={3} md={4}>
              <a>Partners</a>
            </Col>
            <Col xs={3} md={4}>
              <a>Privacy Policy</a>
            </Col>
          </Row>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
