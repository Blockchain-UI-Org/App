import React from "react";
import styled from "styled-components";
import { colors, ThemeColor } from "../../theme/colors";

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
      $colorMode={colors[themeColor]}
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

export default colors;

interface CircleBarBaseProps {
  showValue?: boolean;
  $percent: number;
  $colorMode: Record<string, string>;
}

const Percent = styled.div`
  position: fixed;
  top: 15%;
  left: 5%;
  color: white;
  font-size: 20px;
  z-index: 1;
`;

export const CircleProgressBarBase = styled.div<CircleBarBaseProps>`
  position: relative;
  width: inherit;
  height: inherit;

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
