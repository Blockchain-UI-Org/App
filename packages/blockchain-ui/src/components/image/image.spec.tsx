import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Image from "./image";
import availableImages from "../static/images/index";
import { regularIcons } from "../static/images/icons/regular";

describe("Regular Icon Components Tests...", () => {
  test(`Image accurately renders width and height`, () => {
    const width = "50px";
    const height = "50px";
    const name = "DOT";
    const src = availableImages["DOT"];
    //@ts-ignore
    render(<Image name={name} src={src} width={width} height={height} />);
    const image = screen.getByTestId(`${name}-image`);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("width", width);
    expect(image).toHaveAttribute("height", height);
  });

  test(`Image renders accurate background color`, () => {
    const width = "50px";
    const height = "50px";
    const bgColor = "black";
    const name = "DOT";
    const src = availableImages["DOT"];

    render(
      <Image
        name={name}
        //@ts-ignore
        src={src}
        width={width}
        height={height}
        bgColor={bgColor}
      />
    );
    const image = screen.getByTestId(`${name}-image`);
    expect(image).toHaveStyle(`background-color: black`);
  });

  test(`Image sets an alt-name based on the name`, () => {
    const name = "DOT";
    const src = availableImages["DOT"];
    //@ts-ignore
    render(<Image name={name} src={src} />);
    const image = screen.getByTestId(`${name}-image`);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", `${name}-image`);
  });

  test(`Image accepts and displays image files extensions`, () => {
    const width = "50px";
    const height = "50px";
    const name = "DOT";
    const src = availableImages["DOT"];
    //@ts-ignore
    render(<Image name={name} src={src} width={width} height={height} />);
    const image = screen.getByTestId(`${name}-image`);
    expect(image).toBeInTheDocument();
  });
});
