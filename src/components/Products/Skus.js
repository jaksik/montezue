import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import SkuCard from './SkuCard'
import { Row, Col } from "reactstrap"

const conatinerStyles = {
  // display: 'flex',
  // flexDirection: 'row',
  // flexWrap: 'wrap',
  // justifyContent: 'space-between',
  padding: '1rem 0 1rem 0',
}


//Filer product example

export default props => (
  <StaticQuery
    query={graphql`
      query SkusForProduct {
        skus: allStripeSku(
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
              localFiles {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={({ skus }) => (
      <div style={conatinerStyles}>
        <Row className="no-gutters">
        {skus.edges.map(({ node: sku }) => (
            <Col xs={6} sm={4} lg={3}>
              <SkuCard {...props} key={sku.id} sku={sku} />
            </Col>
        ))}
        </Row>
      </div>
    )}
  />
)