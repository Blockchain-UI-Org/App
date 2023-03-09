import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Button, ButtonColors, ButtonSizes, ButtonVariants } from "./button";

describe("Button", () => {
  it.each(ButtonVariants)("should render each $variant successfully", (variant) => {
    const { baseElement } = render(<Button label="Button" variant={variant} />);
    expect(baseElement).toBeTruthy();
  });

  it.each(ButtonColors)("should render each button $color successfully", (color) => {
    const { baseElement } = render(<Button label="Button" color={color} />);
    expect(baseElement).toBeTruthy();
  });

  it.each(ButtonSizes)("should render each button $size successfully", (size) => {
    const { baseElement } = render(<Button label="Button" size={size} />);
    expect(baseElement).toBeTruthy();
  });

  it("should render button tag", () => {
    const { queryByRole } = render(<Button label="Button" />);
    const button = queryByRole("button");

    expect(button).not.toBeNull();
  });
  it("should render button with label passed in props", () => {
    const { queryByRole } = render(<Button label="Label" />);
    const button = queryByRole("button");

    expect(button?.textContent).toEqual("Label");
  });

  it("should call onClick Callback when button is clicked", () => {
    const mockFn = jest.fn();

    render(<Button label="Button" data-testid="btn" onClick={mockFn} />);

    const button = screen.getByTestId("btn");

    userEvent.click(button);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
