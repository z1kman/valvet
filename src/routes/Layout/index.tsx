import React, { ReactNode, useEffect, useState, FC } from 'react'
import styles from './styles.module.scss'

// Components
import { Header } from '../../components/Header'
import { Sidebar } from './components/Sidebar'

// Constants
import { BREAKPOINTS } from '../../constants/breakpoints'

interface Props {
  children?: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', resizeTrigger)

    return () => {
      window.removeEventListener('resize', resizeTrigger)
    }
  }, [])

  const resizeTrigger = (): void => {
    const currentWidth = window.innerWidth

    if (BREAKPOINTS.TAB_TO < currentWidth) {
      setOpenSidebar(false)
    }
  }

  const handleChangeOpenSidebar = (): void => {
    setOpenSidebar((prevState) => !prevState)
  }

  return (
    <div className={styles.Layout}>
      <Header onClickBurger={handleChangeOpenSidebar} />
      <Sidebar
        open={openSidebar}
        handleChangeOpenSidebar={handleChangeOpenSidebar}
      />
      <div className={styles.Layout__Content}>{children}</div>
    </div>
  )
}
