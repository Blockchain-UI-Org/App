import { Story, Meta } from "@storybook/react";
import { Alert, AlertProps } from "./alert";

export default {
  component: Alert,
  title: "General/Alert",
  parameters: {
    backgrounds: {
      default: "white",
      values: [{ name: "white", value: "#fff" }],
    },
  },
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const InfoAlert = Template.bind({});
InfoAlert.args = {
  message: "You have 0 KSM in your wallet. You may want to deposit here.",
  status: "info",
  actionLabel: "Action",
  dismissLabel: "Dismiss",
};

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
  message: "You have 0 BTC in your wallet. You may want to deposit here.",
  status: "success",
  actionLabel: "Action",
  dismissLabel: "Dismiss",
};
export const WarningAlert = Template.bind({});
WarningAlert.args = {
  message: "You have 0 BTC in your wallet. You may want to deposit here.",
  status: "warning",
  actionLabel: "Action",
  dismissLabel: "Dismiss",
};

export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
  message: "You have 0 BTC in your wallet. You may want to deposit here.",
  status: "error",
  actionLabel: "Action",
  dismissLabel: "Dismiss",
};

export const InfoFilledAlert = Template.bind({});
InfoFilledAlert.args = {
  message: "You have 0 KSM in your wallet. You may want to deposit here.",
  variant: "filled",
  actionLabel: "Action",
  dismissLabel: "Dismiss",
  status: "info",
};

export const SuccessFilledAlert = Template.bind({});
SuccessFilledAlert.args = {
  message: "You have 0 BTC in your wallet. You may want to deposit here.",
  variant: "filled",
  actionLabel: "Action",
  dismissLabel: "Dismiss",
  status: "success",
};
export const WarningFilledAlert = Template.bind({});
WarningFilledAlert.args = {
  message: "You have 0 BTC in your wallet. You may want to deposit here.",
  variant: "filled",
  actionLabel: "Action",
  dismissLabel: "Dismiss",
  status: "warning",
};

export const ErrorFilledAlert = Template.bind({});
ErrorFilledAlert.args = {
  message: "You have 0 BTC in your wallet. You may want to deposit here.",
  variant: "filled",
  actionLabel: "Action",
  dismissLabel: "Dismiss",
  status: "error",
};

export const InfoOutlinedAlert = Template.bind({});
InfoOutlinedAlert.args = {
  message: "You have 0 KSM in your wallet. You may want to deposit here.",
  variant: "outlined",
  actionLabel: "Action",
  dismissLabel: "Dismiss",
  status: "info",
};

export const SuccessOutlinedAlert = Template.bind({});
SuccessOutlinedAlert.args = {
  message: "You have 0 BTC in your wallet. You may want to deposit here.",
  variant: "outlined",
  actionLabel: "Action",
  dismissLabel: "Dismiss",
  status: "success",
};
export const WarningOutlinedAlert = Template.bind({});
WarningOutlinedAlert.args = {
  message: "You have 0 BTC in your wallet. You may want to deposit here.",
  variant: "outlined",
  actionLabel: "Action",
  dismissLabel: "Dismiss",
  status: "warning",
};

export const ErrorOutlinedAlert = Template.bind({});
ErrorOutlinedAlert.args = {
  message: "You have 0 BTC in your wallet. You may want to deposit here.",
  variant: "outlined",
  actionLabel: "Action",
  dismissLabel: "Dismiss",
  status: "error",
};
