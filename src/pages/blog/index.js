import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import 'bootstrap/dist/css/bootstrap.min.css';
import "../../style/index.css"

const IndexPage = ({ data }) => {
  
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Welcome to the blog</h1>
      {/* Displays */}
      {data.blog.edges.map(({ node }) => {
          return (
            <div>
              <Link
                to={node.fields.slug}
                className="link"
              >
                <div className="post-list">
                  <h3 style={{}}>{node.frontmatter.title}</h3>
                  <h5 style={{}}>{node.frontmatter.date}</h5><br />
                  <p>{node.excerpt}</p>
                </div>
              </Link>
            </div>
          )
        })}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
query{
  blog: allMarkdownRemark (                  
   filter: { fileAbsolutePath: {regex: "\/blog/"}}
  ) {
    edges {
      node {
        id
        excerpt
        fields {
           slug
        }
        frontmatter {
           date(formatString: "MMMM DD, YYYY")
           title
           description
        }
      }
    }
  }
}
`