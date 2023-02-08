import { ComponentStory, ComponentMeta } from '@storybook/react'
import documentation from './documentation.mdx'

import { Footer } from './index'

export default {
  title: 'Footer',
  component: Footer,
  parameters: {
    docs: {
      page: documentation,
    },
  },
  args: { ...Footer.defaultProps },
} as ComponentMeta<typeof Footer>

export const Default: ComponentStory<typeof Footer> = () => (
  <Footer />
)
