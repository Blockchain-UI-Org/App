import { render } from "@testing-library/react";
import { SparkLine } from "./index";

jest.mock("react-apexcharts", () => {
  return () => {
    return <div data-testid="apex" />;
  };
});

describe("SparkLine Chart", () => {
  it("should render charttype=undefined successfully", () => {
    const { baseElement } = render(<SparkLine chartData={[40, 70, 75, 70, 50, 28, 7, 64, 38, 27]} />);
    expect(baseElement).toBeTruthy();
  });
  it("should render charttype=undefined successfully", () => {
    const { baseElement } = render(<SparkLine chartType="line" chartData={[40, 70, 75, 70, 50, 28, 7, 64, 38, 27]} />);
    expect(baseElement).toBeTruthy();
  });
  it("should render charttype=bar successfully", () => {
    const { baseElement } = render(
      <SparkLine chartData={[40, 70, 75, 70, 50, 28, 7, 64, 38, 27]} chartType="bar" width={300} height={200} />
    );
    expect(baseElement).toBeTruthy();
  });
});
