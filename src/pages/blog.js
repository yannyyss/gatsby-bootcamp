import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Head from '../components/head'

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
            allContentfulBlogPost {
                edges {
                  node {
                    title
                    slug
                    publishedDate (formatString: "MMMM Do YYYY")
                  }
                }
            }
        }
    `)

    return (
        <div>
            <Head title="blog"/>
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
                {data.allContentfulBlogPost.edges.map(edge => {
                    return (
                        <li>
                            <Link to={`/blog/${edge.node.slug}`}><h2>{edge.node.slug}</h2></Link>
                            <p>{edge.node.title}</p>
                            <p>{edge.node.publishedDate}</p>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default BlogPage