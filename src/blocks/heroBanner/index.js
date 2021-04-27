import React from 'react'
import { Generic, Hero, Container, Title, Image } from 'rbx'
import './_styles.scss'

const HeroBanner = ({ title, content, image}) => {
    return ( 
        <Hero size="fullheight" color={"success"} className='hero-banner' style={{backgroundImage: `url(${image})`}}>
            <Hero.Body>
                <Title>{title}</Title>
                <Title as="p" subtitle>{content}</Title>
            </Hero.Body>
        </Hero>
    )
}

export default HeroBanner
