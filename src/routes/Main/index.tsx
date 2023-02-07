import React, { FC } from 'react'
import styles from './styles.module.scss'

// Components
import { Layout } from '../Layout'
import { Card } from '../../components/Card'

// Constants
import { MODELS } from '../../constants/data'

export const Main: FC = () => {
  return (
    <Layout>
      <main className={styles.Main}>
        {MODELS.map((model) => (
          <div
            key={model.firstName + '_' + model.lastName}
            className={styles.Main__Item}
          >
            <Card
              firstName={model.firstName}
              lastName={model.lastName}
              imgSrc={model.src}
            />
          </div>
        ))}
      </main>
    </Layout>
  )
}
