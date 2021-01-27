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
        <ul className="people-list">
          {people.map(({ node }) => {
            return (
              <li key={node.id} className="mb-8 p-2 border-b-2 bg-gray-400 rounded">
                {
                  node.heroImage
                  &&
                  <div className="p-8">
                  <Img className="w-64 h-64 md:w-32 md:h-32 lg:w-64 lg:h-64 rounded-full shadow-sm mx-auto"  alt="professor_img" fluid={node.heroImage.fluid}/>
                  </div>
                }
                <div className="text-center ">
                    <p className="text-lg">
                    {node.name}
                    </p>    
                </div>  
                <div className="flex flex-wrap justify-center">
                  <div className="bg-blue-300	 px-2 rounded">
                    <p className="text-blue-600">{node.company}</p>
                  </div>
                  <div className="bg-green-500	 ml-2 px-2 rounded">
                    <p className="text-green-700	">{node.title}</p>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center mt-2">
                <p className="text-md text-gray-700	text-center">{node.shortBio.shortBio}</p>
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
