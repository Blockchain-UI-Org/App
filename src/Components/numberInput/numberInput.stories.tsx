import { Story, Meta } from "@storybook/react";
import { NumberInput, NumberInputProps } from "./numberInput";

export default {
  component: NumberInput,
  title: "Atoms/ Input",
} as Meta;

const Template: Story<NumberInputProps> = (args) => (
  <NumberInput {...args}></NumberInput>
);

export const NumericInput = Template.bind({});

NumericInput.args = {
  label: "Advanced",
  icon: "BTC",
  error: "Error message",
  handleMax: () => {
    console.log("Clicked");
  },
  errorAction: {
    onClick: () => {
      "clicked";
    },
    text: "Take action",
  },
  balanceAmount: "88,000",
  balanceSize: "regular",
};
