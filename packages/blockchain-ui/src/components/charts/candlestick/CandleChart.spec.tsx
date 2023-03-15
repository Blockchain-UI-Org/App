import { render } from "@testing-library/react";

import { CandleData } from "./CandleData";
import CandleChart from "./CandlerChart";

jest.mock("react-apexcharts", () => {
  return () => {
    return <div data-testid="apex" />;
  };
});

describe("Candle Chart", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <CandleChart width="700px" height="400px" series={CandleData} upwardsColor="blue500" downwardsColor="red500" />
    );
    expect(baseElement).toBeTruthy();
  });

  it("should render apexchart", () => {
    const { queryByTestId } = render(
      <CandleChart width="700px" height="400px" series={CandleData} upwardsColor="blue500" downwardsColor="red500" />
    );
    expect(queryByTestId("apex")).toBeTruthy();
  });

  it("should show loader", () => {
    const { queryByTestId } = render(
      <CandleChart
        width="700px"
        height="400px"
        loading
        series={CandleData}
        upwardsColor="blue500"
        downwardsColor="red500"
      />
    );
    expect(queryByTestId("loader")).toBeTruthy();
  });

  it("should show disabled", () => {
    const { queryByTestId } = render(
      <CandleChart
        width="700px"
        height="400px"
        disabled
        series={CandleData}
        upwardsColor="blue500"
        downwardsColor="red500"
      />
    );
    expect(queryByTestId("disabled")).toBeTruthy();
  });

  it("should not show anything in header by default", () => {
    const { queryByTestId } = render(
      <CandleChart width="700px" height="400px" series={CandleData} upwardsColor="blue500" downwardsColor="red500" />
    );
    expect(queryByTestId("title")).toBeNull();
    expect(queryByTestId("subtitle")).toBeNull();
    expect(queryByTestId("options")).toBeNull();
  });
  it("should show title when title prop is present", () => {
    const { getByTestId } = render(
      <CandleChart
        width="800px"
        height="400px"
        loading
        series={CandleData}
        upwardsColor="blue500"
        downwardsColor="red500"
        title="Custom Title"
      />
    );
    expect(getByTestId("title").textContent).toEqual("Custom Title");
  });
  it("should show subtitle when subtitle prop is present", () => {
    const { getByTestId } = render(
      <CandleChart
        width="800px"
        height="400px"
        loading
        series={CandleData}
        upwardsColor="blue500"
        downwardsColor="red500"
        title="Custom Title"
        subtitle="Custom Subtitle"
      />
    );
    expect(getByTestId("subtitle").textContent).toEqual("Custom Subtitle");
  });

  it("should show small select when filterOptions prop is present", () => {
    const { getByTestId } = render(
      <CandleChart
        width="800px"
        height="400px"
        loading
        series={CandleData}
        upwardsColor="blue500"
        downwardsColor="red500"
        title="Custom Title"
        subtitle="Custom Subtitle"
        filterOptions={["2012", "2022"]}
      />
    );
    expect(getByTestId("filter")).toBeTruthy();
  });
});
