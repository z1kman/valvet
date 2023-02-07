import React, { ReactNode, FC } from 'react'

import styles from './styles.module.scss'

interface Props {
  loading: boolean
  children: ReactNode
}

export const Skeleton: FC<Props> = ({ loading, children }) => {
  return (
    <>
      {loading ? (
        <div className={styles.Skeleton}>
          <div className={styles.Skeleton__Wrapper}>{children}</div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  )
}

Skeleton.defaultProps = {
  loading: true,
}
