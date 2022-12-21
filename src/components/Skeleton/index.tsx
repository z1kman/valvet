import React, { ReactNode, RefObject, useEffect, useRef, FC } from 'react'

import styles from './styles.module.scss'

interface Props {
  loading: boolean
  children: ReactNode
}

export const Skeleton: FC<Props> = ({ loading, children }) => {
  const skeletonWrapperRef: RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null)
  const skeletonRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (loading) {
      const skeletonWrapper = skeletonWrapperRef.current
      const skeleton = skeletonRef.current as HTMLDivElement
      if (skeletonWrapper !== null) {
        const children = skeletonWrapper?.children[0] as HTMLDivElement
        const width = `${children.offsetWidth}px`
        const height = `${children.offsetHeight}px`

        skeleton.style.width = width
        skeleton.style.height = height
        skeletonWrapper.style.width = width
        skeletonWrapper.style.height = height
      }
    }
  }, [children, loading])

  return (
    <>
      {loading ? (
        <div ref={skeletonRef} className={styles.Skeleton}>
          <div ref={skeletonWrapperRef} className={styles.Skeleton__Wrapper}>
            {children}
          </div>
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
