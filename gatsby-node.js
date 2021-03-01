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

    //2. Get Markdown data

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
        }
    `)

    //3. Create new pages
    res.data.allMarkdownRemark.edges.map(edge => {
        
        createPage({
            component: blogTemplate, //This is the path we want to use for a template
            path:`/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
    
}