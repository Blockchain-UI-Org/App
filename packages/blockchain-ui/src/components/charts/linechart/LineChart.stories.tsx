import { ComponentMeta, Story } from "@storybook/react";
import LineChart, { LineChartProps } from "./LineChart";
import {  MonthlyData } from "./LineData";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Charts/LineChart",
  component: LineChart,
  parameters: {
    backgrounds: {
      default: "white",
     
    },
  },
} as ComponentMeta<typeof LineChart>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<LineChartProps> = (args) => <LineChart {...args} />;

export const BasicLineChart = Template.bind({});
const labels = MonthlyData.map((item) => item.month);
BasicLineChart.args = {
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

export const LineChartWithHorizontalGrid = Template.bind({});

LineChartWithHorizontalGrid.args = {
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

export const LineChartWithDashedHorizontalGrid = Template.bind({});

LineChartWithDashedHorizontalGrid.args = {
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

export const LineChartWithHiddenXAxis = Template.bind({});
LineChartWithHiddenXAxis.args = {
  width: "800px",
  height: "400px",
  labels,
  formatXAxis: (val, t, opts) => {
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

export const LineChartWithHiddenYAxis = Template.bind({});
LineChartWithHiddenYAxis.args = {
  width: "800px",
  height: "400px",
  labels,
  formatXAxis: (val, t, opts) => {
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

export const LineChartWithHiddenBorders = Template.bind({});
LineChartWithHiddenBorders.args = {
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



export const LineChartDisabled = Template.bind({});
LineChartDisabled.args = {
  width: "800px",
  height: "400px",
  labels,

  disabled: true,
  series: [
    { name: "Total Income", color: "primary500", data: MonthlyData.map((item) => item.totalIncome) },
    { name: "Total Expenses", color: "warning500", data: MonthlyData.map((item) => item.totalExpenses) },
  ],
};

export const LineChartLoading = Template.bind({});
LineChartLoading.args = {
  width: "800px",
  height: "400px",
  labels,

  loading: true,
  series: [
    { name: "Total Income", color: "primary500", data: MonthlyData.map((item) => item.totalIncome) },
    { name: "Total Expenses", color: "warning500", data: MonthlyData.map((item) => item.totalExpenses) },
  ],
};

export const LineChartWithHeader = Template.bind({});

LineChartWithHeader.args = {
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

export const LineChartWithFilter = Template.bind({});

LineChartWithFilter.args = {
  title: "Yearly Sales",
  subtitle: "(+43%) than last year",
  options: ["2023", "2022", "2021", "2020", "2019", "2018"],
  // onSelect: jest.fn(),
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
