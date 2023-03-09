import { Story, Meta } from "@storybook/react";
import { Notification, INotificationProps } from "./notification";

export default {
  component: Notification,
  title: "General/ Notification",
  parameters: {
    backgrounds: {
      default: "grey",
      values: [
        { name: "white", value: "#fff" },
        { name: "grey", value: "#F9FAFB" },
      ],
    },
  },
} as Meta;

const Template: Story<INotificationProps> = (args) => (
  <div style={{ minHeight: 80 }}>
    <Notification {...args}></Notification>
  </div>
);

export const Error = Template.bind({});

Error.args = {
  type: "error",
  message: "This is a error message!",
};

export const Success = Template.bind({});

Success.args = {
  type: "success",
  message: "This is a Success message!",
};

export const Warning = Template.bind({});

Warning.args = {
  type: "warning",
  message: "This is a Warning message!",
};

export const Info = Template.bind({});

Info.args = {
  type: "info",
  message: "This is a Info message!",
};

export const NotificationInverted = Template.bind({});

NotificationInverted.args = {
  type: "success",
  invert: true,
  default: true,
  message: "This is a default message!",

};


export const ErrorAction = Template.bind({});

ErrorAction.args = {
  type: "error",
  message: "This is a error message!",
  actionLabel: "Action",
  cancelLabel: "Cancel"
};

export const SuccessAction = Template.bind({});

SuccessAction.args = {
  type: "success",
  message: "This is a Success message!",
  actionLabel: "Action",
  cancelLabel: "Cancel"
};

export const WarningAction = Template.bind({});

WarningAction.args = {
  type: "warning",
  message: "This is a Warning message!",
  actionLabel: "Action",
  cancelLabel: "Cancel"
};

export const InfoAction = Template.bind({});

InfoAction.args = {
  type: "info",
  message: "This is a Info message!",
  actionLabel: "Action",
  cancelLabel: "Cancel"
};


export const NotificationInvertedWithActions = Template.bind({});

NotificationInvertedWithActions.args = {
  type: "success",
  invert: true,
  default: true,
  message: "This is a default message!",
  actionLabel: "Action",
  cancelLabel: "Cancel"
};

export const Loading = Template.bind({});

Loading.args = {
  type: "success",
  message: "Confirming Transaction",
  actionLabel: "Action",
  cancelLabel: "Cancel"
};
