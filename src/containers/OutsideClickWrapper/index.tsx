import React, { FC, useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
  onOutsideClick: () => void
}

export const OutsideClickWrapper: FC<Props> = ({
  children,
  onOutsideClick,
}) => {
  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>
  useEffect(() => {
    window.addEventListener('mousedown', handleClick, false)
    return () => {
      window.removeEventListener('mousedown', handleClick, false)
    }
  }, [])

  const handleClick = (event: any): void => {
    if (!ref.current.contains(event.target)) {
      onOutsideClick()
    }
  }

  return <div ref={ref}>{children}</div>
}
