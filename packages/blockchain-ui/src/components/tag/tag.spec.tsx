import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Tag, TagColors, TagVariants } from "./tag";
import { SuccessIcon } from "../static/images";

describe("Tag", () => {
  it("successfully creates a Default tag", () => {
    render(<Tag color="default">Default Tag</Tag>);
    const tag = screen.getByText("Default Tag");
    expect(tag).toBeInTheDocument();
  });

  describe.each(TagVariants)("Tag Variant %s", (variant) => {
    it.each(TagColors)("Tag Color %s should render with variant " + variant, (color) => {
      render(
        <Tag color={color} variant={variant}>
          Default Tag
        </Tag>
      );
      const tag = screen.getByText("Default Tag");
      expect(tag).toBeInTheDocument();
    });
  });

  it("should render passed icon", () => {
    const { getByTestId } = render(
      <Tag icon={<SuccessIcon />} color="default">
        Default Tag
      </Tag>
    );

    expect(getByTestId("SuccessIcon")).toBeTruthy();
  });
  it("should render not render any icon", () => {
    const { queryByTestId } = render(
      <Tag  color="default">
        Default Tag
      </Tag>
    );

    expect(queryByTestId("start-icon")).toBeNull();
    expect(queryByTestId("end-icon")).toBeNull();
  });
  it("should render icon on left by default", () => {
    const { queryByTestId } = render(
      <Tag icon={<SuccessIcon />} color="default">
        Default Tag
      </Tag>
    );

    expect(queryByTestId("start-icon")).toBeTruthy();

  });
  it("should render icon on left  when iconDirection = start", () => {
    const { queryByTestId } = render(
      <Tag iconDirection="start" icon={<SuccessIcon />} color="default">
        Default Tag
      </Tag>
    );

    expect(queryByTestId("start-icon")).toBeTruthy();

  });
  it("should render icon on right by when iconDirection = end", () => {
    const { queryByTestId } = render(
      <Tag iconDirection="end" icon={<SuccessIcon />} color="default">
        Default Tag
      </Tag>
    );

    expect(queryByTestId("end-icon")).toBeTruthy();

  });
});
