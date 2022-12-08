import { ComponentStory, ComponentMeta } from '@storybook/react'
import documentation from './documentation.mdx'

import { Copyright } from './index'

export default {
  title: 'Copyright',
  component: Copyright,
  parameters: {
    docs: {
      page: documentation,
    },
  },
  args: { ...Copyright.defaultProps },
} as ComponentMeta<typeof Copyright>

export const Default: ComponentStory<typeof Copyright> = () => <Copyright />
