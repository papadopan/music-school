import React from 'react'
import PropTypes from 'prop-types'
import prettyBytes from "pretty-bytes"
import styles from "./file.module.css"

function FilePreview({url, time,size, name}) {
  return (
    <div className={styles.wrapper}>
      <a href={url} download>
      <img  className={styles.fileImg} src="https://images.unsplash.com/photo-1591025810539-a321000cda85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fG11c2ljJTIwbm90ZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
      <p className="text-center">{name}</p>
      <div className="flex justify-between">
      <div>{prettyBytes(size)}</div>
      <div>{time}</div>
      </div>
      </a>
    </div>
  )
}

FilePreview.propTypes = {
  url:PropTypes.string,
  size: PropTypes.number
}

export default FilePreview

