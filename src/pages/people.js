import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import styles from './blog.module.css'
import Img from 'gatsby-image'

const People = props => {
  const people= props.data.allContentfulPerson.edges;




  return (
    <Layout location={props.location}>
    <div style={{ background: '#fff' }}>
      <Helmet title="People" />
      <div className={styles.hero}>Οι εκπαιδευτικοί μας</div>
      <div className="wrapper">
        <ul className="flex flex-wrap justify-around">
          {people.map(({ node }) => {
            return (
              <li key={node.id} className="mb-16  p-2 border-b-2">
                {
                  node.heroImage
                  &&
                <Img className="w-32 h-32 rounded-full shadow-sm mx-auto"  alt="professor_img" fluid={node.heroImage.fluid}/>
                }
                <div className="text-center mt-4">

                <p className="text-md">
                {node.name}
                </p>
                <div className="flex flex-wrap justify-center">
                <p className="text-gray-500 text-sm mr-4 ">
                  {node.company} 
                  </p>
                <p className="text-indigo-400  text-sm">
                {node.title}
                </p>
                </div>
                </div>

              </li>
            )
          })}
        </ul>
      </div>
    </div>
  </Layout>
  )
}

People.propTypes = {

}

export default People


export const pageQuery = graphql`
query allPeople {
  allContentfulPerson {
    edges {
      node {
        id
        company
      heroImage:image {
          fluid(maxWidth: 1180, maxHeight: 480, resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        title
        name
        shortBio {
          shortBio
        }
      }
    }
  }
}

`
