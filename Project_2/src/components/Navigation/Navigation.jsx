import React from 'react'
import styles from './Navigation.module.css'

function Navigation() {
  
  return (
    <nav className= {`${styles.navigation} container`}>

    <div>
<img src="/images/logo.png" alt="do come coding" srcset="" />
    </div>
    <ul>
        <li>Home</li>
        <li>Contact US</li>
        <li>About US</li>
    </ul>
    </nav>
  )
}

export default Navigation