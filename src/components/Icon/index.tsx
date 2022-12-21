import styles from './styles.module.scss'
import React, { useState, useEffect, useRef, FC } from 'react'

export const IconsName = ['close', 'menu'] as const

export type IconType = typeof IconsName[number]

interface Props {
  name: IconType
}

export const Icon: FC<Props> = ({ name }) => {
  const ImportedIconRef = useRef(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    async function importIcon (): Promise<any> {
      try {
        const { default: namedImport } = await import(
          `../../svg/icons/${name}.svg`
        )
        ImportedIconRef.current = namedImport
      } finally {
        setLoading(false)
      }
    }
    importIcon().catch(console.error)
  }, [name])

  if (!loading) {
    return (
      <img
        className={styles.Icon}
        src={ImportedIconRef.current ?? '#'}
        alt={name}
      />
    )
  } else {
    return null
  }
}
