import React from 'react';
import { Story, Meta } from '@storybook/react';
import { LoadingSpinner, LoadingSpinnerProps } from './loadingSpinner';
import { Button } from '../button/Button';

export default {
  component: LoadingSpinner,
  title: 'Atoms/  LoadingSpinner',
} as Meta;

const Template: Story<LoadingSpinnerProps> = args => <LoadingSpinner {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  width: '32px',
};

interface ButtonProps {
  loading: boolean;
  title: string;
}

const LoadingButton: React.FC<ButtonProps> = ({ title, loading }) => {
  //@ts-ignore
  return <Button>{loading ? <LoadingSpinner /> : title}</Button>;
};

const LoadingButtonTemplate: Story<ButtonProps> = args => <LoadingButton {...args} />;

export const BasicLoadingButton = LoadingButtonTemplate.bind({});

BasicLoadingButton.args = {
  loading: false,
  title: 'Loading Button',
};
