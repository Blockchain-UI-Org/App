import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TextFieldInput } from "./textfield";

describe("TextArea", () => {
  it("Successfully creates an Text field", () => {
    render(<TextFieldInput state="value" />);
    const TextAreaInput = screen.getByTestId("textfield-Input");
    expect(TextAreaInput).toBeInTheDocument();
  });
});
