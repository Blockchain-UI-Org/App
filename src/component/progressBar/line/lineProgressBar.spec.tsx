import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import GradientProgressBar from ".";

describe("Button", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <GradientProgressBar
        minValue={0}
        maxValue={100}
        value={50}
        title="mock title"
        themeColor="blue"
      />
    );
    const component = screen.getByTestId("gradient-progress-bar");
    expect(baseElement).toBeTruthy();
    expect(component.tagName).toBe("INPUT");
  });

  it("render the max value even when the value is greater than the max value", () => {
    render(
      <GradientProgressBar
        minValue={0}
        maxValue={100}
        value={500}
        title="mock title"
        showValue={true}
      />
    );
    const component = screen.getByTestId("gradient-progress-bar-value");
    expect(component.innerHTML).toBe("100+");
  });

  it("render an error message when an error value is available", () => {
    render(
      <GradientProgressBar
        minValue={0}
        maxValue={100}
        value={500}
        title="mock title"
        showValue={true}
        errorMessage="mock error"
      />
    );
    const component = screen.getByTestId("gradient-progress-bar-error-msg");
    expect(component.innerHTML).toBe("mock error");
  });
});
