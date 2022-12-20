import React from "react";
import { ComponentStory, ComponentMeta, Story } from "@storybook/react";
import AreaChart, { ChartProps } from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Charts/Area",
  component: AreaChart,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    currency: {
      options: ["BTC", "ETH", "USDC", "USDT"],
      control: { type: "select" }, // Automatically inferred when 'options' is define
    },
    color: {
      options: ["green", "yellow", "red", "blue"],
      control: { type: "select" }, // Automatically inferred when 'options' is define
    },
  },
} as ComponentMeta<typeof AreaChart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ChartProps> = (args) => <AreaChart {...args} />;

export const Area = Template.bind({});

Area.args = {
  width: "700px",
  height: "500px",
  chartData: [10, 101, 35, 51, 49, 62, 69, 91, 14],
  name: "Mock Name",
  chartLabels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  currency: "BTC",
};
