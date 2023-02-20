import React, { FC, useEffect } from 'react'

// Components
import { Sidebar, Props as SidebarProps } from '../../../../components/Sidebar'

export const SidebarContainer: FC<SidebarProps> = (props) => {
  const { open } = props

  function handleSetWrapperHeight (): void {
    document.body.style.setProperty(
      '--sidebar-wrapper-height',
      `${window.innerHeight}px`
    )
  }

  useEffect(() => {
    if (open) {
      handleSetWrapperHeight()
      window.addEventListener('scroll', handleSetWrapperHeight)
      window.addEventListener('resize', handleSetWrapperHeight)
    }
    return () => {
      window.removeEventListener('scroll', handleSetWrapperHeight)
      window.removeEventListener('resize', handleSetWrapperHeight)
    }
  }, [open])

  return <Sidebar {...props} />
}
