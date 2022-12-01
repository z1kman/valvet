import { ComponentStory, ComponentMeta } from '@storybook/react'
import documentation from './documentation.mdx'

import { Link } from './index'

export default {
  title: 'Link',
  component: Link,
  parameters: {
    docs: {
      page: documentation,
    },
  },
  args: { ...Link.defaultProps },
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Link',
}

export const ColorPrimary = Template.bind({})
ColorPrimary.args = {
  label: 'Link',
  color: 'primary',
}

export const ColorSecondary = Template.bind({})
ColorSecondary.args = {
  label: 'Link',
  color: 'secondary',
}

export const SizeS = Template.bind({})
SizeS.args = {
  label: 'Link',
  size: 's',
}

export const SizeM = Template.bind({})
SizeM.args = {
  label: 'Link',
  size: 'm',
}

export const SizeL = Template.bind({})
SizeL.args = {
  label: 'Link',
  size: 'l',
}

export const TypeItalic = Template.bind({})
TypeItalic.args = {
  label: 'Link',
  italic: true,
}
