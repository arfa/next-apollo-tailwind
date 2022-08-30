import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';
import { PlusIcon } from '../Icon/PlusIcon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Moleculs/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onAdd: { action: 'onAdd' },
  },
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => (
  <div>
    <div className='w-20'>
      <Card {...args} />
    </div>
    <br />
    <div className='w-32'>
      <Card {...args} />
    </div>
    <br />
    <div className='w-52'>
      <Card {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  imageSrc: 'https://picsum.photos/200/300',
  imageAlt: 'Image alt',
  title: 'Card title',
  href: 'https://www.google.com',
};
