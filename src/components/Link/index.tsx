import styles from './styles.module.scss'
import cn from 'classnames'
import React, { FC } from 'react'

interface Props {
  label?: string
  href?: string | undefined
  italic?: boolean
  color?: 'primary' | 'secondary'
  size?: 's' | 'm' | 'l'
}

export const Link: FC<Props> = (props) => {
  const { label, href, italic, color = 'primary', size = 'm' } = props

  return (
    <a
      className={cn(
        styles.Link,
        styles[`Link_size_${size}`],
        styles[`Link_color_${color}`],
        {
          [styles.Link_italic]: italic,
        }
      )}
      href={href}
    >
      {label}
    </a>
  )
}

Link.defaultProps = {
  label: '',
  href: '#',
  italic: false,
  color: 'primary',
  size: 'm',
}
