import React from 'react'
import styles from './styles.module.scss'
import velvetSvg from '../../svg/velvet.svg'
import managementSvg from '../../svg/management.svg'

export const Logo: React.FC = () => {
  return (
    <a href={'/'}>
      <div className={styles.Logo}>
        <img
          src={velvetSvg}
          alt={'title'}
          className={styles.Logo__Item_first}
        />
        <img
          src={managementSvg}
          alt={'subtitle'}
          className={styles.Logo__Item_second}
        />
      </div>
    </a>
  )
}
