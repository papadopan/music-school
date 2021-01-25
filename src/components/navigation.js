import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link 
          to="/"
          activeStyle={{color:"#7a7d68"}}
        >
          Αρχική</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/" activeStyle={{color:"#7a7d68"}}>Μπλογκ</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/contact/" activeStyle={{color:"#7a7d68"}}>Νομοθεσία</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/contact/" activeStyle={{color:"#7a7d68"}}>Κατακτήριες</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/contact/" activeStyle={{color:"#7a7d68"}}>Το Σχολείο μας </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/files/" activeStyle={{color:"#7a7d68"}}>Αρχείο </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/people/" activeStyle={{color:"#7a7d68"}}>Εκπαιδευτικοί </Link>
      </li>
    </ul>
  </nav>
)
