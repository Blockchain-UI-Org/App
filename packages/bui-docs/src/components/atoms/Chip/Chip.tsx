import * as React from "react";
import styled from "styled-components";
import { Heading5 } from "../Typography";
export interface IChipProps {
  selected?: boolean;
  label: string;
  onClick?: () => void;
}

const ChipContainer = styled.div<{ selected?: boolean }>`
  padding: 10px 15px 10px 15px;
  background-color: ${({ theme }) => theme.secondary.background};
  border-radius: 15px;
  cursor: pointer;
  text-align: center;
  width: fit-content;
  position: relative;
  ${({ selected }) =>
    selected &&
    `
    &::before {
      background: linear-gradient(90deg, #8bd6ff 0%, #9effff 50.31%, #d3bfff 100%);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 15px;
      padding: 2px;
    }
  `};
`;

export function Chip({ selected, label, onClick }: IChipProps) {
  return (
    <ChipContainer selected={selected} onClick={onClick}>
      <Heading5 weight={selected ? "semibold" : "normal"}>{label}</Heading5>
    </ChipContainer>
  );
}
