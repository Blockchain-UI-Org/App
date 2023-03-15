import { render } from "@testing-library/react";
import AreaChart from "./AreaChart";
import { MonthlyData } from "./AreaData";

jest.mock("react-apexcharts", () => {
  return () => {
    return <div data-testid="apex" />;
  };
});

const labels = MonthlyData.map((item) => item.month);

describe("Line Chart", () => {



  it("should render successfully", () => {
    const { baseElement } = render(
      <AreaChart
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
      <AreaChart
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
      <AreaChart
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
      <AreaChart
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

  it("should not show anything in header by default", () => {
    const { queryByTestId } = render(
      <AreaChart
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
    expect(queryByTestId("title")).toBeNull();
    expect(queryByTestId("subtitle")).toBeNull();
    expect(queryByTestId("options")).toBeNull();
  })
  it("should show title when title prop is present", () => {
    const { getByTestId } = render(
      <AreaChart
        width="800px"
        height="400px"
        labels={labels}
       
        title="Custom Title"
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
    expect(getByTestId("title").textContent).toEqual("Custom Title");
  })
  it("should show subtitle when subtitle prop is present", () => {
    const { getByTestId } = render(
      <AreaChart
        width="800px"
        height="400px"
        labels={labels}
       
        title="Custom Title"
        subtitle="Custom Subtitle"
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
    expect(getByTestId("subtitle").textContent).toEqual("Custom Subtitle");
  })


  it("should show small select when filterOptions prop is present", () => {
    const { getByTestId } = render(
      <AreaChart
        width="800px"
        height="400px"
        labels={labels}
        title="Custom Title"
        subtitle="Custom Subtitle"
        filterOptions={["2012","2022"]}
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
    expect(getByTestId("filter")).toBeTruthy();
  })


});
