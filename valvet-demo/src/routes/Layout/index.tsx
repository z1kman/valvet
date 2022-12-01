import React, { ReactNode } from 'react'

// Components
import { Header } from '../../components/Header'
import { Sidebar } from './components/Sidebar'

interface Props {
  children?: ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <div style={{ height: '6000px' }}>{children}</div>
    </>
  )
}
