import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TextArea } from "./textarea";

const error500 = "rgba(145, 158, 171, 0.08)";

describe("TextArea", () => {
  it("successfully creates an TextArea ", () => {
    render(<TextArea label="Label" />);
    const TextAreaInput = screen.getByPlaceholderText("Label");
    expect(TextAreaInput).toBeInTheDocument();
  });

  it("successfully creates an Input with Background", () => {
    render(<TextArea label="Label" isBackground={true} />);
    const withBackground = screen.getByPlaceholderText("Label");
    expect(withBackground).toBeInTheDocument();
    expect(withBackground).toHaveStyle(`background-color: ${error500}`);
  });

  it("successfully creates an Input with Standard", () => {
    render(<TextArea label="Label" isBackground={true} standard={true} />);
    const withBackground = screen.getByPlaceholderText("Label");
    expect(withBackground).toBeInTheDocument();
    expect(withBackground).toHaveStyle("border: none");
  });
});
