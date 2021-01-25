import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/layout'
import FilePreview from '../components/FilePreview'

const Files = (props) =>{
  const files = props.data.allFile.edges
    return (
      <Layout location={props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title="Files" />
          <div className={styles.hero}>Μουσικά Αρχεία</div>
          <div className="wrapper">
            <h2 className="section-headline">Πεντάγραμμο</h2>
            <ul className="article-list">
              {files.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <FilePreview name={node.name} time={node.modifiedTime}url={node.publicURL} size={node.size}/>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Layout>
    )
}

export default Files

export const pageQuery = graphql`
query AllFilesQuery {
  allFile(filter: {relativeDirectory: {eq: "pentagrammo"}}) {
    edges {
      node {
        extension
        name
        id
        modifiedTime(fromNow: true)
        publicURL
        size
      }
    }
  }
}
`
