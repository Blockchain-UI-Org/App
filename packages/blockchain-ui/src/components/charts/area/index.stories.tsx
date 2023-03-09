import React from "react";
import { ComponentStory, ComponentMeta, Story } from "@storybook/react";
import AreaChart, { AreaChartProps } from ".";
import { AreaData } from "./AreaData";
import moment from "moment";

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
const Template: Story<AreaChartProps> = (args) => <AreaChart {...args} />;

export const Area = Template.bind({});
const labels = AreaData.map((item) => item.timestamp);
Area.args = {
  width: "100%",
  height: "300px",

  labels,
  formatXAxis: (val, t, opts) => {
    return moment(val).format("DD MMMM YYYY") as string;
  },
  formatYAxis: (val) => {
    return (val as number).toFixed(2);
  },
  hideYAxisLabels: true,
  labelCount: 3,

  series: [{ name: "NetSharePrice", color: "blue500", data: AreaData.map((item) => item.netShareValue) }],
};
