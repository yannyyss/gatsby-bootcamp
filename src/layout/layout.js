import React from 'react'
import Footer from '../components/footer'

const Layout = (props) => {
    return (
        <div>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout
