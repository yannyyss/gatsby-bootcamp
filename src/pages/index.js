import React from "react"
import { Link } from 'gatsby'
import Layout from '../layout/layout'

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <h1>Hello</h1>
        <h2>HI</h2>
        <Link to="/about">About me</Link>
      </Layout>
    </div>
  )
}

export default IndexPage