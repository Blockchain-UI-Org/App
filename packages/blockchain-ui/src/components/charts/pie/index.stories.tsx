import React from "react";
import { ComponentMeta, Story } from "@storybook/react";

import { DefaultTheme } from "blockchain-ui/theme";
import { Typography } from "@mui/material";
import { Flex } from "blockchain-ui/components/flex";
import { TrendingDown, TrendingUp } from "blockchain-ui/components/static/images";
import PieChart, { PieChartProps } from "./pie";

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
const Template: Story<PieChartProps> = (args) => <PieChart {...args} />;

export const Pie = Template.bind({});

Pie.args = {
  diameter: "300px",
  disableHover: true,
  chartData: [
    { label: "BTC", value: 12244, color: "primary500" },
    { label: "ETH", value: 53345, color: "secondary500" },
    { label: "USDC", value: 44313, color: "error500" },
  ],
};

export const Donut = Template.bind({});

Donut.args = {
  diameter: "300px",
  type: "donut",
  centerElement: (
    <>
      <Typography fontSize={18}>Percent Change</Typography>
      <Flex flex={1} flexWrap="nowrap" row alignItems="center">
        <TrendingDown  style={{ color: "red", width: 14 }} />

        <Typography style={{ color: "red", fontSize: 14 }}>-0.2% / Month</Typography>
      </Flex>
    </>
  ),
  chartData: [
    { label: "BTC", value: 12244, color: "primary500" },
    { label: "ETH", value: 53345, color: "secondary500" },
    { label: "USDC", value: 44313, color: "error500" },
  ],
};
