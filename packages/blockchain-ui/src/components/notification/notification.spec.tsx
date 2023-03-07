import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Notification } from "./notification";
import userEvent from "@testing-library/user-event";

describe("Notification", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Notification message="Mock message" type="info" />);
    expect(baseElement).toBeTruthy();
  });

  it("should render message passed in prop", async () => {
    const message = "Mock Message";
    render(<Notification message={message} type="info" />);
    const p = await screen.findByRole("message");
    expect(p.textContent).toEqual(message);
  });

  it("should not display dismiss and action buttons but display close button", () => {
    render(<Notification message="Mock message" type="info" />);
    const button = screen.queryByTestId("action-button");
    const disimissbutton = screen.queryByTestId("dismiss-button");
    const closeButton = screen.queryByTestId("close-button");
    expect(button).toBeNull();
    expect(disimissbutton).toBeNull();
    expect(closeButton).not.toBeNull();
  });

  it("should show action button and hide cancel button and close button when action label is passed", () => {
    const message = "Mock Message";
    render(<Notification message={message} type="info" actionLabel="Action" />);
    const button = screen.queryByTestId("action-button");
    const disimissbutton = screen.queryByTestId("dismiss-button");
    const closeButton = screen.queryByTestId("close-button");
    expect(button).toHaveTextContent("Action");
    expect(disimissbutton).toBeNull();
    expect(closeButton).toBeNull();
  });

  it("should show cancel button when cancel label is passed", () => {
    const message = "Mock Message";
    render(<Notification message={message} type="info" cancelLabel="Dismiss" />);
    const button = screen.queryByTestId("action-button");
    const disimissbutton = screen.queryByTestId("dismiss-button");
    const closeButton = screen.queryByTestId("close-button");
    expect(button).toBeNull();
    expect(disimissbutton).toHaveTextContent("Dismiss");
    expect(closeButton).toBeNull();
  });

  it("should show both action and cancel buttons when both labels are passed", () => {
    const message = "Mock Message";
    render(<Notification message={message} type="info" actionLabel="Action" cancelLabel="Dismiss" />);
    const dismiss = screen.queryByTestId("dismiss-button");
    const action = screen.queryByTestId("action-button");
    const closeButton = screen.queryByTestId("close-button");
    expect(dismiss).toHaveTextContent("Dismiss");
    expect(action).toHaveTextContent("Action");
    expect(closeButton).toBeNull();
  });

  it("should call action callback when action Button is Clicked", async () => {
    const mockFn = jest.fn();
    const message = "Mock Message";
    render(<Notification message={message} type="info" onAction={mockFn} actionLabel="Action" cancelLabel="Dismiss" />);

    const action = screen.getByTestId("action-button");

    userEvent.click(action);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("should call Dismiss callback when Dismiss Button is Clicked", () => {
    const mockFn = jest.fn();
    const message = "Mock Message";
    render(<Notification message={message} type="info" onCancel={mockFn} actionLabel="Action" cancelLabel="Dismiss" />);

    const dismiss = screen.getByTestId("dismiss-button");

    userEvent.click(dismiss);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("should call close callback when close Button is Clicked", () => {
    const mockFn = jest.fn();
    const message = "Mock Message";
    render(<Notification message={message} type="info" onClose={mockFn}  />);

    const close = screen.getByTestId("close-button");

    userEvent.click(close);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("should show Info Icon", () => {
    const message = "Mock Message";
    const { getByTestId } = render(
      <Notification message={message} type="info" actionLabel="Action" cancelLabel="Dismiss" />
    );

    expect(getByTestId("InfoIcon")).toBeTruthy();
  });
  it("should show Warning Icon", () => {
    const message = "Mock Message";
    const { getByTestId } = render(
      <Notification message={message} type="warning" actionLabel="Action" cancelLabel="Dismiss" />
    );

    expect(getByTestId("WarningIcon")).toBeTruthy();
  });
  it("should show Success Icon", () => {
    const message = "Mock Message";
    const { getByTestId } = render(
      <Notification message={message} type="success" actionLabel="Action" cancelLabel="Dismiss" />
    );

    expect(getByTestId("SuccessIcon")).toBeTruthy();
  });
  it("should show Error Icon", () => {
    const message = "Mock Message";
    const { getByTestId } = render(
      <Notification message={message} type="error" actionLabel="Action" cancelLabel="Dismiss" />
    );
    // Info Icon in Case or Error Status
    expect(getByTestId("InfoIcon")).toBeTruthy();
  });

  it("should hide icon", () => {
    const message = "Mock Message";
    const { queryByTestId } = render(
      <Notification default message={message} type="error" actionLabel="Action" cancelLabel="Dismiss" />
    );
    // Info Icon in Case or Error Status
    expect(queryByTestId("InfoIcon")).toBeNull();
  })

});
