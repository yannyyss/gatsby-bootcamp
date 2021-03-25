const path = require('path')

module.exports.onCreateNode = ({node, actions}) => {
    const { createNodeField } = actions

    if(node.internal.type === "MarkdownRemark") {
        
        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })

    }
}

module.exports.createPages = async ({graphql,actions}) => {
    const { createPage } = actions

    //1. Get blog path to template

    const blogTemplate = path.resolve('./src/templates/blog.js')
    const blogTemplate2 = path.resolve('./src/templates/blog2.js')

    //1. Get home path to template
    const homeTemplate = path.resolve('./src/templates/homePage.js') 

    //2. Get blog Markdown data

    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    //2. Set the static pages
    const staticPages = [
        {
            component: homeTemplate, //This is the path we want to use for a template
            path:`/home`,
            context: {
                slug: `home`
            }
        }
    ]

    //3. Create new blog pages from markdown
    res.data.allMarkdownRemark.edges.map(edge => {
        createPage({
            component: blogTemplate, //This is the path we want to use for a template
            path:`/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })

    //3. Create new blog pages from contentful
    res.data.allContentfulBlogPost.edges.map(edge => {
        
        createPage({
            component: blogTemplate2, //This is the path we want to use for a template
            path:`/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
    
    //3. Create a new static home page
    staticPages.map(page => {
        
        createPage({
            component: page.component, //This is the path we want to use for a template
            path: page.path,
            context: {
                slug: page.context.slug
            }
        })

    })
}