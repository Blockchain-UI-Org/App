import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import PieChart, { ChartProps } from "./";
import { colors } from "../../theme/colors";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Charts/Pie",
  component: PieChart,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    diameter: {
      control: { type: "text" }, // Automatically inferred when 'options' is define
    },
  },
} as ComponentMeta<typeof PieChart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ChartProps> = (args) => <PieChart {...args} />;

export const Pie = Template.bind({});

Pie.args = {
  diameter: "300px",
  chartData: [
    { label: "BTC", value: 12244 },
    { label: "ETH", value: 53345 },
    { label: "USDC", value: 44313 },
  ],
  chartColors: [colors.blue.color, colors.blue.midtone, colors.blue.background],
};
