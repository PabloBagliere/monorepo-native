import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NativeBaseProvider } from 'native-base';

import { AtomicButton } from '../components/atomic';
import { theme } from '../theme';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: AtomicButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    children: { control: 'text' },
    size: { control: 'text' },
    variant: { control: 'text' },
  },
} as ComponentMeta<typeof AtomicButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AtomicButton> = (args) => (
  <NativeBaseProvider theme={theme}>
    <AtomicButton {...args} />
  </NativeBaseProvider>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: 'Button',
  colorScheme: 'primary',
  size: 'md',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  colorScheme: 'secondary',
  size: 'sm',
  variant: 'subtle',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Button',
  size: 'lg',
  colorScheme: 'red',
  variant: 'outline',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Button',
  size: 'xs',
  colorScheme: 'green',
  variant: 'link',
};
