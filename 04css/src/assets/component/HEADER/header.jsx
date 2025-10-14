import React from 'react'
import  styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h3>Sheryins</h3>
      <button className='btn'>Login</button>
    </div>
  )
}

export default Header