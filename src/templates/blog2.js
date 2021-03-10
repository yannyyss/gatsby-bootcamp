import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout/layout'
import Head from '../components/head'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const query = graphql`
    query ( $slug: String!) 
    {   
        contentfulBlogPost (slug: { eq: $slug } )
        { 
            title
            publishedDate(formatString: "MMMM Do YYYY")
            body {
                raw
            }
        }

    }
`


const Blog = (props) => {

    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title}/>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {/* {documentToReactComponents(props.data.contentfulBlogPost.body.raw)} */}
            {/* <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div> */}
        </Layout>
    )
}

export default Blog