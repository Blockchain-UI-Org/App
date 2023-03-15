import React from "react";
import { Story, Meta } from "@storybook/react";
import { ILoadingSpinnerProps, LoadingSpinner } from "./loadingSpinner";
import { Button } from "../button";
import { IBuiColor } from "blockchain-ui/theme/colors";

const ColorOptions = [
  "white",
  "black",
  "grey50",
  "grey100",
  "grey200",
  "grey300",
  "grey400",
  "grey500",
  "grey600",
  "grey700",
  "grey800",
  "grey900",
  "primary100",
  "primary300",
  "primary500",
  "primary700",
  "primary900",

  "secondary100",
  "secondary300",
  "secondary500",
  "secondary700",
  "secondary900",

  "success100",
  "success300",
  "success500",
  "success700",
  "success900",

  "warning100",
  "warning300",
  "warning500",
  "warning700",
  "warning900",

  "info100",
  "info300",
  "info500",
  "info700",
  "info900",

  "error100",
  "error300",
  "error500",
  "error700",
  "error900",
] as (keyof IBuiColor)[];

export default {
  component: LoadingSpinner,
  title: "Indicators/LoadingSpinner",
  argTypes: {
    color: { name: "Color", options: ColorOptions, defaultValue: "grey500", control: { type: "select" } },
    size: { name: "Size" },
  },
} as Meta<ILoadingSpinnerProps>;

const Template: Story<ILoadingSpinnerProps> = (args) => <LoadingSpinner {...args} />;

export const Basic = Template.bind({});

Basic.args = {};

interface ButtonProps {
  loading: boolean;
  title: string;
}

const LoadingButton: React.FC<ButtonProps> = ({ title, loading }) => {
  return <Button label={<LoadingSpinner size={10} strokeWidth={1} color="white" />}></Button>;
};

const LoadingButtonTemplate: Story<ButtonProps> = (args) => <LoadingButton {...args} />;

export const BasicLoadingButton = LoadingButtonTemplate.bind({});

BasicLoadingButton.args = {
  loading: false,
  title: "Loading Button",
};
