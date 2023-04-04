import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TextFieldStandard } from "./textfieldstandard";

describe("textFieldStandard", () => {
  it("successfully create the Text Field Standard", () => {
    render(<TextFieldStandard state="value" />);
    const TextInputStandard = screen.getByTestId("text");
    expect(TextInputStandard).toBeInTheDocument();
  });
});
