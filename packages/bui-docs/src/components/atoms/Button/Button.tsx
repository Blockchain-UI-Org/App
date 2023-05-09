import { device } from "@site/src/theme/AppThemes/Theme";
import styled from "styled-components";

export const Button = styled("button")`
  border: none;
  outline: none;
  background: ${({ theme }) => theme.default.gradientAccent};
  border-radius: 36px;
  height: 64px;
  width: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.tablet} {
    height: 36px;
    width: 180px;
  }
`;
