import React, { Fragment } from 'react'
import styles from './style.less'

const Logo = ({ collapsed, logo, title }) => (
  <Fragment>
    <img className={styles.logo} src={logo} alt="" />
    {
      !collapsed && <b className={styles.title}>{title}</b>
    }
  </Fragment>
)

export default Logo