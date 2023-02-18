import { Story, Meta } from '@storybook/react';
import { Alert, AlertProps } from './alert';

export default {
  component: Alert,
  title: 'General/Alert',
} as Meta;

const Template: Story<AlertProps> = args => (
  <div
    style={{
      background: '#EBEBEB',
      width: '1000px',
      minHeight: '1000px',
      margin: 'auto',
      padding: '5rem',
    }}
  >
    <div style={{ width: '410px', minHeight: '473px' }}>
      <Alert {...args} />
    </div>
  </div>
);

export const InfoAlert = Template.bind({});
InfoAlert.args = {
  message: 'You have 0 KSM in your wallet. You may want to deposit here.',
  type: 'info',
};

export const WarningAlert = Template.bind({});
WarningAlert.args = {
  message: 'You have 0 BTC in your wallet. You may want to deposit here.',
  type: 'error',
};
