import { Story, Meta } from '@storybook/react';
import { Notification, NotificationProps } from './notification';

export default {
  component: Notification,
  title: 'General/ Notification',
} as Meta;

const Template: Story<NotificationProps> = args => <Notification {...args}></Notification>;

export const Error = Template.bind({});

Error.args = {
  type: 'negative',
  message: 'Failed, add error message which can be long.',
};

export const Success = Template.bind({});

Success.args = {
  type: 'positive',
  message: 'Success!',
};

export const Loading = Template.bind({});

Loading.args = {
  type: 'loading',
  message: 'Confirming Transaction',
};
