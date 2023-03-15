import { ComponentMeta, Story } from "@storybook/react";
import AreaChart, { AreaChartProps } from "./AreaChart";
import { MonthlyData } from "./AreaData";
import { Flex } from "blockchain-ui/components/flex";
import { Heading, Paragraph } from "blockchain-ui/components/typography";
import { SmallSelect } from "blockchain-ui/components/select";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Charts/Area",
  component: AreaChart,
  parameters: {
    backgrounds: {
      default: "white",
    },
  },
} as ComponentMeta<typeof AreaChart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<AreaChartProps> = (args) => <AreaChart {...args} />;

export const BasicAreaChart = Template.bind({});
const labels = MonthlyData.map((item) => item.month);
BasicAreaChart.args = {
  width: "800px",
  height: "400px",
  labels,
  formatXAxis: (val, t, opts) => {
    if (!val) {
      return val;
    }
    return (val as string).slice(0, 3);
  },
  formatYAxis: (val) => {
    return (val as number).toFixed(0);
  },
  series: [
    { name: "Total Income", color: "primary500", data: MonthlyData.map((item) => item.totalIncome) },
    { name: "Total Expenses", color: "warning500", data: MonthlyData.map((item) => item.totalExpenses) },
  ],
};

export const AreaChartWithHorizontalGrid = Template.bind({});

AreaChartWithHorizontalGrid.args = {
  width: "800px",
  height: "400px",
  labels,
  formatXAxis: (val, t, opts) => {
    if (!val) {
      return val;
    }
    return (val as string).slice(0, 3);
  },
  formatYAxis: (val) => {
    return (val as number).toFixed(0);
  },
  showHorizontalGridLine: true,
  series: [
    { name: "Total Income", color: "primary500", data: MonthlyData.map((item) => item.totalIncome) },
    { name: "Total Expenses", color: "warning500", data: MonthlyData.map((item) => item.totalExpenses) },
  ],
};

export const AreaChartWithDashedHorizontalGrid = Template.bind({});

AreaChartWithDashedHorizontalGrid.args = {
  width: "800px",
  height: "400px",
  labels,
  formatXAxis: (val, t, opts) => {
    if (!val) {
      return val;
    }
    return (val as string).slice(0, 3);
  },
  formatYAxis: (val) => {
    return (val as number).toFixed(0);
  },
  showHorizontalGridLine: true,
  gridLine: "dashed",
  series: [
    { name: "Total Income", color: "primary500", data: MonthlyData.map((item) => item.totalIncome) },
    { name: "Total Expenses", color: "warning500", data: MonthlyData.map((item) => item.totalExpenses) },
  ],
};

export const AreaChartWithHiddenXAxis = Template.bind({});
AreaChartWithHiddenXAxis.args = {
  width: "800px",
  height: "400px",
  labels,
  formatXAxis: (val, t, opts) => {
    if (!val) {
      return val;
    }
    return (val as string).slice(0, 3);
  },
  formatYAxis: (val) => {
    return (val as number).toFixed(0);
  },
  hideXAxis: true,
  series: [
    { name: "Total Income", color: "primary500", data: MonthlyData.map((item) => item.totalIncome) },
    { name: "Total Expenses", color: "warning500", data: MonthlyData.map((item) => item.totalExpenses) },
  ],
};

export const AreaChartWithHiddenYAxis = Template.bind({});
AreaChartWithHiddenYAxis.args = {
  width: "800px",
  height: "400px",
  labels,
  formatXAxis: (val, t, opts) => {
    if (!val) {
      return val;
    }
    return (val as string).slice(0, 3);
  },
  formatYAxis: (val) => {
    return (val as number).toFixed(0);
  },
  hideYAxis: true,
  series: [
    { name: "Total Income", color: "primary500", data: MonthlyData.map((item) => item.totalIncome) },
    { name: "Total Expenses", color: "warning500", data: MonthlyData.map((item) => item.totalExpenses) },
  ],
};

export const AreaChartWithHiddenBorders = Template.bind({});
AreaChartWithHiddenBorders.args = {
  width: "800px",
  height: "400px",
  labels,
  formatXAxis: (val, t, opts) => {
    if (!val) {
      return val;
    }
    return (val as string).slice(0, 3);
  },
  formatYAxis: (val) => {
    return (val as number).toFixed(0);
  },
  hideYAxisBorder: true,
  hideXAxisBorder: true,
  series: [
    { name: "Total Income", color: "primary500", data: MonthlyData.map((item) => item.totalIncome) },
    { name: "Total Expenses", color: "warning500", data: MonthlyData.map((item) => item.totalExpenses) },
  ],
};

export const AreaChartWithWithNoStroke = Template.bind({});
AreaChartWithWithNoStroke.args = {
  width: "800px",
  height: "400px",
  labels,
  formatXAxis: (val, t, opts) => {
    if (!val) {
      return val;
    }
    return (val as string).slice(0, 3);
  },
  formatYAxis: (val) => {
    return (val as number).toFixed(0);
  },
  hideCurveStroke: true,
  hideYAxisBorder: true,
  hideXAxisBorder: true,
  showHorizontalGridLine: true,
  gridLine: "dashed",
  opacityFrom: 0.8,
  opacityTo: 0.4,
  series: [
    { name: "Total Income", color: "primary500", data: MonthlyData.map((item) => item.totalIncome) },
    { name: "Total Expenses", color: "warning500", data: MonthlyData.map((item) => item.totalExpenses) },
  ],
};

export const AreaChartDisabled = Template.bind({});
AreaChartDisabled.args = {
  width: "800px",
  height: "400px",
  labels,

  disabled: true,
  series: [
    { name: "Total Income", color: "primary500", data: MonthlyData.map((item) => item.totalIncome) },
    { name: "Total Expenses", color: "warning500", data: MonthlyData.map((item) => item.totalExpenses) },
  ],
};

export const AreaChartLoading = Template.bind({});
AreaChartLoading.args = {
  width: "800px",
  height: "400px",
  labels,

  loading: true,
  series: [
    { name: "Total Income", color: "primary500", data: MonthlyData.map((item) => item.totalIncome) },
    { name: "Total Expenses", color: "warning500", data: MonthlyData.map((item) => item.totalExpenses) },
  ],
};

export const AreaChartWithHeader = Template.bind({});

AreaChartWithHeader.args = {
  title: "Yearly Sales",
  subtitle: "(+43%) than last year",
  width: "800px",
  height: "400px",
  labels,
  showHorizontalGridLine: true,
  gridLine: "dashed",
  hideYAxisBorder: true,
  hideXAxisBorder: true,
  series: [{ name: "Total Income", color: "primary500", data: MonthlyData.map((item) => item.totalIncome) }],
};

export const AreaChartWithFilter = Template.bind({});

AreaChartWithFilter.args = {
  title: "Yearly Sales",
  subtitle: "(+43%) than last year",
  filterOptions: ["2023", "2022", "2021", "2020", "2019", "2018"],

  width: "800px",
  height: "400px",
  labels,
  formatXAxis: (val, t, opts) => {
    return (val as string).slice(0, 3);
  },
  formatYAxis: (val) => {
    return (val as number).toFixed(0);
  },
  showHorizontalGridLine: true,
  gridLine: "dashed",
  hideYAxisBorder: true,
  hideXAxisBorder: true,
  series: [{ name: "Total Income", color: "primary500", data: MonthlyData.map((item) => item.totalIncome) }],
};
