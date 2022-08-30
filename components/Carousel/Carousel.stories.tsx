import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Carousel } from './Carousel';
import { mockedItems } from './items.mocks';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Moleculs/Carousel',
  component: Carousel,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onAdd: { action: 'onAdd' },
  },
} as ComponentMeta<typeof Carousel>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  items: mockedItems,
};
