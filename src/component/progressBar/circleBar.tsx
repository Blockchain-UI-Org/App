import React from "react";
import styled from "styled-components";
import { Box } from "theme-ui";
import { colorMode, ThemeColor } from "../theme/colors";

export interface CircleBarProps {
  showValue?: boolean;
  title: string;
  themeColor: ThemeColor;
  percent: number;
}

export const CircleProgressBar = ({ themeColor = "default", percent = 0 }) => {
  return (
    <CircleProgressBarBase
      //@ts-ignore
      $colorMode={colorMode[themeColor]}
      $percent={100 - percent}
    >
      <svg
        className="circleContainer"
        viewBox="2 -2 28 36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="circleContainerBackground"
          r="16"
          cx="16"
          cy="16"
        ></circle>
        <circle className="circleOffset" r="16" cx="16" cy="16"></circle>
      </svg>
      <Percent>{percent}%</Percent>
    </CircleProgressBarBase>
  );
};

const Percent = styled.div`
  position: fixed;
  top: 15%;
  left: 5%;
  color: white;
  font-size: 20px;
  z-index: 2;
`;

const swatches = {
  blue: "#0091FF",
  blueBright: "#3e8ff7",
  pink: "#D356B9",
  pinkGmi: "#EC5B94",
  red: "#FF562B",
  orange: "#D87C22",
  yellow: "#FFC503",
  green: "#1BB441",
  greenPrice: "#68CE81",
  bluePrice: "#50A7E9",
  redPrice: "#F55858",
  purple: "#7B61FF",
  black: "#000",
  white: "#FFF",
  "grey-200": "#F5F5F5",
  "grey-300": "#E4E4E4",
  "grey-400": "#C0C0C0",
  "grey-500": "#A7A7A7",
  "grey-600": "#7C7C7C",
  "grey-700": "#545454",
  "grey-800": "#231F20",
  "grey-900": "#151515",
  transparent: "transparent",
};

const colors = {
  ...swatches,
  /* Aliases */
  primary: swatches.blue,
  secondary: swatches.pink,
  background: swatches.black,
  error: swatches.red,
  text: swatches["grey-300"],
  disabled: swatches["grey-700"],
};

export default colors;

interface ProgressBarBaseProps {
  minValue: number;
  maxValue: number;
  value?: number;
  showValue?: boolean;
  title: string;
  themeColor: ThemeColor;
}

interface ProgressBarBaseProps {
  $percent: number;
  $color?: keyof typeof colors;
  $bgColor?: keyof typeof colors;
}

export const ProgressBarBase = styled(Box)<ProgressBarBaseProps>`
  position: relative;
  height: 22px;
  width: 100%;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 22px;
    width: 100%;
    background-image: linear-gradient(90deg, transparent, transparent 60%),
      linear-gradient(
        0deg,
        #0091ff,
        ${({ theme }) => transparentize(0.65, "#0091FF")} 100%
      );
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 22px;
    width: ${({ $percent }) => $percent + "%"};
    background-image: linear-gradient(90deg, transparent, transparent 60%),
      linear-gradient(-2deg, #3e8ff7 15%, #ec5b94 65%, #ff5628 90%);
    background-size: cover;
  }
`;

interface CircleBarBaseProps {
  showValue?: boolean;
  $percent: number;
  $colorMode: Record<string, string>;
}

export const CircleProgressBarBase = styled.div<CircleBarBaseProps>`
  width: 100%;
  height: 100%;

  .circleContainer {
    --dot-diameter: 100%;
    --circle-border-width: 4px;
    --default-color: #545454;
    --completion-color: ${({ $colorMode }) => $colorMode?.midtone};
    width: var(--dot-diameter);
    height: var(--dot-diameter);
    transform: rotate(-90deg);
  }
  .circleContainerBackground {
    fill: none;
    stroke: var(--default-color);
    stroke-width: var(--circle-border-width);
  }
  .circleOffset {
    fill: none;
    stroke-linecap: round;
    stroke: var(--completion-color);
    stroke-dasharray: 100 100;
    stroke-linecap: round;
    stroke-width: var(--circle-border-width);
    stroke-dashoffset: ${({ $percent }) => $percent};
  }
`;
function transparentize(
  arg0: number,
  arg1: string
): import("styled-components").Interpolation<
  import("styled-components").ThemedStyledProps<
    import("theme-ui").BoxProps &
      React.RefAttributes<any> &
      ProgressBarBaseProps,
    any
  >
> {
  throw new Error("Function not implemented.");
}
