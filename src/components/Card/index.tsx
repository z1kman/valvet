import React, { useState, useEffect, FC } from 'react'
import styles from './styles.module.scss'

// Component
import { Skeleton } from '../Skeleton'

interface Props {
  imgSrc: string
  firstName: string
  lastName: string
}

export const Card: FC<Props> = (props) => {
  const { imgSrc, firstName, lastName } = props

  const [isImageLoaded, setIsImageLoaded] = useState(false)

  useEffect(() => {
    const image = new Image()
    image.onload = () => setIsImageLoaded(true)
    image.src = imgSrc

    console.log(imgSrc)
    return () => {
      image.onload = null
    }
  }, [imgSrc])

  return (
    <div>
      <Skeleton loading={!isImageLoaded}>
        <div className={styles.Card__Image}>
          <img src={imgSrc} alt={`${firstName} ${lastName}`} />
        </div>
      </Skeleton>
      <div className={styles.Card__Info}>
        <Skeleton loading={!isImageLoaded}>
          <p className={styles.Card__InfoItem}>{firstName}</p>
        </Skeleton>
        <Skeleton loading={!isImageLoaded}>
          <p className={styles.Card__InfoItem}>{lastName}</p>
        </Skeleton>
      </div>
    </div>
  )
}

Card.defaultProps = {
  imgSrc: '#',
  firstName: '',
  lastName: '',
}
