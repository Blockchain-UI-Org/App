import React from 'react';
import { Story, Meta } from '@storybook/react';
import GradientProgressBar, { ProgressBarProps } from '.';

export default {
  component: GradientProgressBar,
  title: 'Molecules/ProgressBar/GradientProgressBar',
} as Meta;

const Template: Story<ProgressBarProps> = args => <GradientProgressBar {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  minValue: 0,
  maxValue: 100,
  value: 50,
  showValue: true,
  errorMessage: 'Mock Error Message',
};

Basic.argTypes = {
  errorMessage: { control: { type: 'text' } },
};
