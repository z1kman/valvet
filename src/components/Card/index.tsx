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
  const [srcNamedExport, setSrcNamedExport] = useState('#')

  useEffect(() => {
    async function importIcon (): Promise<any> {
      try {
        const { default: namedImport } = await import(
          `../../static/pic/${imgSrc}`
        )
        const image = new Image()
        image.onload = () => setIsImageLoaded(true)
        image.src = namedImport
        setSrcNamedExport(namedImport)
      } catch (e) {
        console.error(e)
      }
    }
    importIcon().catch(console.error)
  }, [imgSrc])

  return (
    <div>
      <Skeleton loading={!isImageLoaded}>
        <div className={styles.Card__Image}>
          {srcNamedExport !== '#' && (
            <img src={srcNamedExport} alt={`${firstName} ${lastName}`} />
          )}
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
