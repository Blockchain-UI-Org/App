import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TextFieldFilled } from "./textfieldfilled";

describe("textFieldFilled", () => {
  it("successfully create the Text Field Filled", () => {
    render(<TextFieldFilled state="value" />);
    const TextInputData = screen.getByTestId("textfield-filledInput");
    expect(TextInputData).toBeInTheDocument();
  });
});
