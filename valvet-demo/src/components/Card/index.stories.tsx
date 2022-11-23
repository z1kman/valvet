import { ComponentStory, ComponentMeta } from "@storybook/react";
import documentation from "./documentation.mdx";

import img from '../../../public/pic/Rectangle 18.jpg'

import { Card } from "./index";

export default {
  title: "Card",
  component: Card,
  parameters: {
    docs: {
      page: documentation,
    },
  },
  args: { ...Card.defaultProps },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  imgSrc: img,
  firstName: 'Alina',
  lastName: 'Bezurika'
};
