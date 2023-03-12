import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SmallSelect } from "./SmallSelect";

describe("Small Select", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SmallSelect options={["Some Val1", "Some Val2"]} />);
    expect(baseElement).toBeTruthy();
  });

  it("Should Show first option in select on load", () => {
    const { getByTestId } = render(<SmallSelect options={["Some Val1", "Some Val2"]} />);

    expect(getByTestId("select-value").textContent).toEqual("Some Val1");
  });

  it("Should Show Selected value in box on load", () => {
    const { getByTestId } = render(<SmallSelect selectedValue="Some Val2" options={["Some Val1", "Some Val2"]} />);

    expect(getByTestId("select-value").textContent).toEqual("Some Val2");
  });

  it("Should not show options by default", () => {
    const { queryByTestId } = render(<SmallSelect selectedValue="Some Val2" options={["Some Val1", "Some Val2"]} />);

    expect(queryByTestId("options")).not.toBeTruthy();
  });

  it("Should should show options when clicked on select", () => {
    const { queryByTestId, getByTestId } = render(<SmallSelect options={["Some Val1", "Some Val2"]} />);

    userEvent.click(getByTestId("select-value"));

    expect(queryByTestId("options")).toBeTruthy();
  });

  it("Should should hide options when double clicked on select", () => {
    const { queryByTestId, getByTestId } = render(<SmallSelect options={["Some Val1", "Some Val2"]} />);

    userEvent.click(getByTestId("select-value"));
    userEvent.click(getByTestId("select-value"));

    expect(queryByTestId("options")).not.toBeTruthy();
  });

  it("Should should hide options when double clicked on select", () => {
    const { queryByTestId, getByTestId } = render(<SmallSelect options={["Some Val1", "Some Val2"]} />);

    userEvent.click(getByTestId("select-value"));
    userEvent.click(getByTestId("select-value"));

    expect(queryByTestId("options")).not.toBeTruthy();
  });

  it("Should should swithc selected value another option is clicked and close the options", () => {
    const { queryByTestId, getByTestId } = render(<SmallSelect options={["Some Val1", "Some Val2"]} />);
    const select = getByTestId("select-value");

    userEvent.click(select);

    const option2 = getByTestId("1");

    userEvent.click(option2);

    expect(select.textContent).toEqual("Some Val2");
    expect(queryByTestId("options")).toBeFalsy();
  });

  it("Should call onChange Callback when its Passed", () => {
    const Mock = jest.fn();
    const { queryByTestId, getByTestId } = render(<SmallSelect onChange={Mock} options={["Some Val1", "Some Val2"]} />);
    const select = getByTestId("select-value");

    userEvent.click(select);

    const option2 = getByTestId("1");

    userEvent.click(option2);

    expect(Mock).toHaveBeenCalledWith("Some Val2");
    expect(Mock).toHaveBeenCalledTimes(1);
    expect(queryByTestId("options")).toBeFalsy();
  });

  it("Should close options when clicking outside", () => {
    const Mock = jest.fn();
    const { queryByTestId, getByTestId } = render(
      <div data-testid="test">
        <SmallSelect onChange={Mock} options={["Some Val1", "Some Val2"]} />
      </div>
    );
    const select = getByTestId("select-value");

    userEvent.click(select);
    expect(queryByTestId("options")).toBeTruthy();

    const outsideElm = getByTestId("test");

    userEvent.click(outsideElm);

    expect(Mock).toHaveBeenCalledTimes(0);
    expect(queryByTestId("options")).toBeFalsy();
  });
});
