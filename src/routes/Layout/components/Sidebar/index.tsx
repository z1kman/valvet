import React, { FC } from 'react'
import styles from './styles.module.scss'

// Components
import { Icon } from '../../../../components/Icon'
import { LinksMenu, ItemType } from '../../../../components/LinksMenu'
import { Copyright } from '../../../../components/Copyright'

// Helpers
import cn from 'classnames'

interface Props {
  open: boolean
  handleChangeOpenSidebar: () => void
}

const LINK_ITEMS = [
  { href: '#', label: 'News' },
  { href: '#', label: 'Work' },
  { href: '#', label: 'About' },
  { href: '#', label: 'Contact' },
] as ItemType[]

export const Sidebar: FC<Props> = (props) => {
  const { open, handleChangeOpenSidebar } = props
  return (
    <aside className={cn(styles.Sidebar, { [styles.Sidebar_show]: open })}>
      <div className={styles.Sidebar__Content}>
        <span
          className={styles.Sidebar__Icon}
          onClick={handleChangeOpenSidebar}
        >
          <Icon name="close" />
        </span>
        <h1 className={styles.Sidebar__Title}>Models</h1>
        <LinksMenu direction="column" items={LINK_ITEMS} />
      </div>
      <div className={cn(styles.Sidebar__Footer)}>
        <Copyright />
      </div>
    </aside>
  )
}

Sidebar.defaultProps = {
  open: false,
}
