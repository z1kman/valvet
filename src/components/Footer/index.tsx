import React from 'react'
import styles from './styles.module.scss'

// Components
import { Copyright } from 'components/Copyright'

export const Footer: React.FC = () => {
  return (
    <footer className={styles.Footer}>
      <Copyright />
    </footer>
  )
}
