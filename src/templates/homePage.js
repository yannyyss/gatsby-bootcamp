import React from 'react'
import HeroBanner from '../blocks/heroBanner'
import { graphql } from 'gatsby'

const HomePage = (props) => {

    const data = props.data.contentfulHeroBanner
    
    return (
        <HeroBanner title={data.title} content={data.content} image={data.backgroundImage.file.url} />
    )

}

export const query = graphql`
    query {
        contentfulHeroBanner {
            content
            title
            backgroundImage {
                file {
                    url
                }
            }
        }
    }
` 

export default HomePage