import React from 'react'
import { Generic, Hero, Container, Title, Image } from 'rbx'


const HeroBanner = ({ title, content, image}) => {
    return (
        <Generic>    
            <Hero size="fullheight" color={"success"}>
                <Hero.Body>
                    <Container>
                        <Title>{title}</Title>
                        <Title as="p" subtitle>{content}</Title>
                        <Image.Container size={128}>
                            <Image src={image} />
                        </Image.Container>
                    </Container>
                </Hero.Body>
            </Hero>
        </Generic>
    )
}

export default HeroBanner
