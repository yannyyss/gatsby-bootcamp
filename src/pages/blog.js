import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            date
                            title
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    return (
        <div>
            <h1>Blog</h1>
            <ol>
                {data.allMarkdownRemark.edges.map(edge => {
                    return (
                        <li>
                            <Link to={edge.node.fields.slug}><h2>{edge.node.frontmatter.title}</h2></Link>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default BlogPage