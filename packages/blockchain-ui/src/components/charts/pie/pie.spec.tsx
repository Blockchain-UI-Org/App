import { render } from "@testing-library/react";
import PieChart from "./pie";

jest.mock("react-apexcharts", () => {
  return () => {
    return <div data-testid="apex" />
  };
});

describe("Pie Chart", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <PieChart
        diameter="300px"
        disableHover
        chartData={[
          { label: "BTC", value: 12244, color: "primary500" },
          { label: "ETH", value: 53345, color: "secondary500" },
          { label: "USDC", value: 44313, color: "error500" },
        ]}
      />
    );
    expect(baseElement).toBeTruthy();
  });

   it("should not show centerElement when type = pie", () => {
      const { queryByTestId } = render(
        <PieChart
          diameter="300px"
          centerElement={<div data-testid="center" />}
          disableHover
          chartData={[
            { label: "BTC", value: 12244, color: "primary500" },
            { label: "ETH", value: 53345, color: "secondary500" },
            { label: "USDC", value: 44313, color: "error500" },
          ]}
        />
      );
      expect(queryByTestId("center")).not.toBeTruthy();
    });

   it("should  show centerElement when type = donut", () => {
      const { queryByTestId } = render(
        <PieChart
          diameter="300px"
          type="donut"
          centerElement={<div data-testid="center" />}
          disableHover
          chartData={[
            { label: "BTC", value: 12244, color: "primary500" },
            { label: "ETH", value: 53345, color: "secondary500" },
            { label: "USDC", value: 44313, color: "error500" },
          ]}
        />
      );
      expect(queryByTestId("center")).toBeTruthy();
    });
});
