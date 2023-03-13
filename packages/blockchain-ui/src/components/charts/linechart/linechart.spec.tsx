import { render } from "@testing-library/react";
import LineChart from "./LineChart";
import { MonthlyData } from "./LineData";

jest.mock("react-apexcharts", () => {
  return () => {
    return <div data-testid="apex" />;
  };
});

const labels = MonthlyData.map((item) => item.month);

describe("Line Chart", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <LineChart
        width="800px"
        height="400px"
        labels={labels}
        formatXAxis={(val, t, opts) => {
          return (val as string).slice(0, 3);
        }}
        formatYAxis={(val) => {
          return (val as number).toFixed(0);
        }}
        hideXAxis
        series={[
          { name: "Total Income", color: "primary500", data: MonthlyData.map((item) => item.totalIncome) },
          { name: "Total Expenses", color: "warning500", data: MonthlyData.map((item) => item.totalExpenses) },
        ]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
  it("should render apexchart", () => {
    const { queryByTestId } = render(
      <LineChart
        width="800px"
        height="400px"
        labels={labels}
        formatXAxis={(val, t, opts) => {
          return (val as string).slice(0, 3);
        }}
        formatYAxis={(val) => {
          return (val as number).toFixed(0);
        }}
        hideXAxis
        series={[
          { name: "Total Income", color: "primary500", data: MonthlyData.map((item) => item.totalIncome) },
          { name: "Total Expenses", color: "warning500", data: MonthlyData.map((item) => item.totalExpenses) },
        ]}
      />
    );
    expect(queryByTestId("apex")).toBeTruthy();
  });



  it("should show loader", () => {
    const { queryByTestId } = render(
      <LineChart
        width="800px"
        height="400px"
        labels={labels}
        formatXAxis={(val, t, opts) => {
          return (val as string).slice(0, 3);
        }}
        loading
        formatYAxis={(val) => {
          return (val as number).toFixed(0);
        }}
        hideXAxis
        series={[
          { name: "Total Income", color: "primary500", data: MonthlyData.map((item) => item.totalIncome) },
          { name: "Total Expenses", color: "warning500", data: MonthlyData.map((item) => item.totalExpenses) },
        ]}
      />
    );
    expect(queryByTestId("loader")).toBeTruthy();
  });


  it("should show disabled", () => {
    const { queryByTestId } = render(
      <LineChart
        width="800px"
        height="400px"
        labels={labels}
        disabled
        formatXAxis={(val, t, opts) => {
          return (val as string).slice(0, 3);
        }}
        formatYAxis={(val) => {
          return (val as number).toFixed(0);
        }}
        hideXAxis
        series={[
          { name: "Total Income", color: "primary500", data: MonthlyData.map((item) => item.totalIncome) },
          { name: "Total Expenses", color: "warning500", data: MonthlyData.map((item) => item.totalExpenses) },
        ]}
      />
    );
    expect(queryByTestId("disabled")).toBeTruthy();
  });

});
