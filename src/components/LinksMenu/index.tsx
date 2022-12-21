import React, { FC } from 'react'
import styles from './styles.module.scss'
import cn from 'classnames'

// Components
import { Link } from '../Link'

export interface ItemType {
  href?: string | undefined
  label: string
}

interface Props {
  direction: 'row' | 'column'
  items: ItemType[]
}

export const LinksMenu: FC<Props> = (props) => {
  const { direction, items = [] } = props

  return (
    <>
      <ul
        className={cn(
          styles.LinksMenu,
          styles[`LinksMenu_direction_${direction}`]
        )}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className={cn(
              styles.LinksMenu__Item,
              styles[`LinksMenu__Item_direction_${direction}`]
            )}
          >
            <Link label={item?.label} href={item?.href ?? '#'} />
          </li>
        ))}
      </ul>
    </>
  )
}

LinksMenu.defaultProps = {
  direction: 'column',
}
