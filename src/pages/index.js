import React from "react"
import { Link } from 'gatsby'
import Layout from '../layout/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Index"/>
        <h1>Hello</h1>
        <h2>HI</h2>
        <Link to="/about">About me</Link>
        <br/>
        <Link to="/home">HeroBanner</Link>
        <br/>
        <Link to="/blog">Blogs Entries</Link>
      </Layout>
    </div>
  )
}

export default IndexPage