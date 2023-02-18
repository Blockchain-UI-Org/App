import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

import { Image } from '../image/image';

export interface LoadingSpinnerProps {
  width?: string;
}

const SpinnerAnimation = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg)
  }
`;

const Circle = styled(Image)`
  animation: 1s linear infinite ${SpinnerAnimation};
  width: ${({ width }) => width || '1.5rem'};
`;

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({ width }) => {
  return <Circle width={width} name="spinner" />;
};
