import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Alert } from "./alert";

describe("Alert", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Alert message="Mock message" status="info" />);
    expect(baseElement).toBeTruthy();
  });

  it("should render message passed in prop", async () => {
    const message = "Mock Message";
    render(<Alert message={message} status="info" />);
    const p = await screen.findByRole("message");
    expect(p.textContent).toEqual(message);
  });

  it("should not display dismiss and action buttons", () => {
    const message = "Mock Message";
    render(<Alert message={message} status="info" />);
    const button = screen.queryByTestId("action-button");
    const disimissbutton = screen.queryByTestId("dismiss-button");
    expect(button).toBeNull();
    expect(disimissbutton).toBeNull();
  });

  it("should show action button when action label is passed", () => {
    const message = "Mock Message";
    render(<Alert message={message} status="info" actionLabel="Action" />);
    const button = screen.queryByTestId("action-button");

    expect(button).toHaveTextContent("Action");
  });

  it("should show dismiss button when dismiss label is passed", () => {
    const message = "Mock Message";
    render(<Alert message={message} status="info" dismissLabel="Dismiss" />);
    const dismiss = screen.queryByTestId("dismiss-button");

    expect(dismiss).toHaveTextContent("Dismiss");
  });

  it("should show both action and dismiss buttons when both labels are passed", () => {
    const message = "Mock Message";
    render(<Alert message={message} status="info" actionLabel="Action" dismissLabel="Dismiss" />);
    const dismiss = screen.queryByTestId("dismiss-button");
    const action = screen.queryByTestId("action-button");
    expect(dismiss).toHaveTextContent("Dismiss");
    expect(action).toHaveTextContent("Action");
  });

  it("should call action callback when action Button is Clicked", async () => {
    const mockFn = jest.fn();
    const message = "Mock Message";
    render(<Alert message={message} status="info" onAction={mockFn} actionLabel="Action" dismissLabel="Dismiss" />);

    const action = screen.getByTestId("action-button");

    userEvent.click(action);

    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it("should call Dismiss callback when Dismiss Button is Clicked", () => {
    const mockFn = jest.fn();
    const message = "Mock Message";
    render(<Alert message={message} status="info" onDismiss={mockFn} actionLabel="Action" dismissLabel="Dismiss" />);

    const dismiss = screen.getByTestId("dismiss-button");

    userEvent.click(dismiss);

    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it("should show Info Icon", () => {
    const message = "Mock Message";
    const { getByTestId } = render(<Alert message={message} status="info" actionLabel="Action" dismissLabel="Dismiss" />);

    expect(getByTestId("InfoIcon")).toBeTruthy();
  });
  it("should show Warning Icon", () => {
    const message = "Mock Message";
    const { getByTestId } = render(<Alert message={message} status="warning" actionLabel="Action" dismissLabel="Dismiss" />);

    expect(getByTestId("WarningIcon")).toBeTruthy();
  });
  it("should show Success Icon", () => {
    const message = "Mock Message";
    const { getByTestId } = render(<Alert message={message} status="success" actionLabel="Action" dismissLabel="Dismiss" />);

    expect(getByTestId("SuccessIcon")).toBeTruthy();
  });
  it("should show Error Icon", () => {
    const message = "Mock Message";
    const { getByTestId } = render(<Alert message={message} status="error" actionLabel="Action" dismissLabel="Dismiss" />);
    // Info Icon in Case or Error Status
    expect(getByTestId("InfoIcon")).toBeTruthy();
  });
});
