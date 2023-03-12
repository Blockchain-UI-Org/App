import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import CandleStickChart, { ChartProps } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Charts/CandleStick",
  component: CandleStickChart,
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
} as ComponentMeta<typeof CandleStickChart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ChartProps> = (args) => <CandleStickChart {...args} />;

export const CandleStick = Template.bind({});

CandleStick.args = {
  width: "700px",
  height: "500px",
  chartData: [
    {
      data: [
        {
          x: new Date(2016, 0o1, 0o1),
          y: [21.98, 56.29, 51.59, 53.85],
        },
        {
          x: new Date(2016, 0o2, 0o1),
          y: [53.66, 54.99, 51.35, 52.95],
        },
        {
          x: new Date(2016, 0o3, 0o7),
          y: [52.98, 59.29, 61.59, 43.85],
        },
        {
          x: new Date(2016, 0o4, 0o5),
          y: [53.66, 24.99, 61.35, 12.95],
        },

        {
          x: new Date(2016, 0o2, 0o1),
          y: [52.76, 57.35, 22.15, 57.03],
        },
      ],
    },
  ],
  upwardsColor: "blue500",
  downwardsColor: "red500"
};
