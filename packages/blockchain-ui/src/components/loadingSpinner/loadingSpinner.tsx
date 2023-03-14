import { withTheme } from "blockchain-ui/theme";
import { IBuiColor } from "blockchain-ui/theme/colors";
import { alpha } from "blockchain-ui/utils";
import styled, { css, keyframes } from "styled-components";

const SpinnerAnimation = keyframes`
 
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
  
`;
export type ILoadingSpinnerProps = { color?: keyof IBuiColor, size?: number; strokeWidth?: number; };
export const LoadingSpinner = styled.div<ILoadingSpinnerProps>`
  ${withTheme(({ theme, color = "grey600",strokeWidth =4, size = 32 }) => {
    const colorVal = theme.palette.buiColors[color];
    return css`
      width: ${size}px;
      height: ${size}px;
      border: ${strokeWidth}px transparent solid;
      border-top: ${strokeWidth}px ${colorVal} solid;
      border-right: ${strokeWidth}px ${colorVal} solid;
    `;
  })}
  border-radius: 50%;
  animation: ${SpinnerAnimation} 0.6s infinite linear;
`;
export default LoadingSpinner;
