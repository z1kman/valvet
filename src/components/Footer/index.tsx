import React from 'react'
import styles from './styles.module.scss'

// Components
import { Logo } from '../Logo'
import { Link } from '../Link'
import { Icon } from '../Icon'

interface Props {
  onClickBurger?: () => void
}

export const Footer: React.FC<Props> = (props) => {
  const { onClickBurger } = props

  return (
    <footer className={styles.Header}>
      <div className={styles.Header__Content}>
        <div className={styles.Header__Items}>
          <div className={styles.Header__Item_link}>
            <Link label="back" color="secondary" italic size="s" />
          </div>
          <div className={styles.Header__Item_icon} onClick={onClickBurger}>
            <Icon name="menu" />
          </div>
          <Logo />
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  onClickBurger: () => {},
}
