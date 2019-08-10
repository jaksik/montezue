import React from "react"
import { Row, Col } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const previewRow = (props) => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "cover.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Row className="no-gutters">
        <Col xs={12} sm={6}>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </Col>
        <Col xs={12} sm={6}>
            <h3>{props.data.heading}</h3>
        </Col>
    </Row>
  )
}

export default previewRow;