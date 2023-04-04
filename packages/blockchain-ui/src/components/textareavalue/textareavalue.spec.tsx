import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TextAreaValue } from "./textareavalue";

const error500 = "rgba(145, 158, 171, 0.08)";

describe("TextArea", () => {
  it("successfully creates an TextArea with Value ", () => {
    render(<TextAreaValue value="value" label="Label" onHover isFocus isDisabled isHelpText isError validationColor />);
    const TextAreaInputValue = screen.getByLabelText("Label");
    expect(TextAreaInputValue).toBeInTheDocument();
  });

  it("Successfully creates an TextArea with Hover", () => {
    render(<TextAreaValue value="value" label="Label" onHover isFocus isDisabled isHelpText isError validationColor />);
    const TextAreaInput = screen.getByTestId("textArea-with-value");
    expect(TextAreaInput).toBeInTheDocument();
  });
});
