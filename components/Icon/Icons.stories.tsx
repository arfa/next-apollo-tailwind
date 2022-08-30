import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArrowIcon } from './ArrowIcon';
import { PlusIcon } from './PlusIcon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Icon',
  component: ArrowIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof ArrowIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const ArrowTemplate: ComponentStory<typeof ArrowIcon> = (args) => <ArrowIcon {...args} />;

export const arrow = ArrowTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
arrow.args = {
  color: '#1217b7',
};

const PlusTemplate: ComponentStory<typeof ArrowIcon> = (args) => <PlusIcon {...args} />;
export const plus = PlusTemplate.bind({});
plus.args = {
  color: '#c0050d',
};