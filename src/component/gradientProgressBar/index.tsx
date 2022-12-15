import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

import { formatNumber } from '../../utils/format';
import { theme } from '../theme';

export interface ProgressBarProps {
  minValue: number;
  maxValue: number;
  value: number;
  showValue?: boolean;
  errorMessage?: string | ReactElement;
  title: string;
}
const { error100, error500, yellow500, pink500, success500, white, black, blue500 } = theme.colors;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  align-content: center;

  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 6px;
    border-radius: 24px;
    background: linear-gradient(90deg, ${pink500} 0%, ${yellow500} 50%, ${success500} 100%);
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: ${white};
    cursor: pointer;
    border: 2px solid ${success500};
  }

  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: ${success500};
    cursor: pointer;
  }
`;
const StyledValue = styled.div`
  padding-right: 10px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: ${black};
`;

const ErrorMessage = styled.div`
  width: 416px;
  height: 80px;
  color: ${error500};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 16px;
  margin-top: 28px;
  /* Error/Error 100 */

  background: ${error100};
  border-radius: 8px;

  a {
    color: ${blue500};
  }
`;

const GradientProgressBar: FC<ProgressBarProps> = ({
  minValue,
  maxValue,
  value,
  showValue = false,
  errorMessage = '',
  title,
}) => (
  <Container>
    <Wrapper>
      {showValue && (
        <StyledValue data-testid="gradient-progress-bar-value">
          {value > maxValue ? `${maxValue}+` : formatNumber(value, 2)}
        </StyledValue>
      )}
      <input
        type="range"
        min={minValue}
        max={maxValue}
        value={value}
        className="slider"
        id="myRange"
        title={title}
        data-testid="gradient-progress-bar"
      />
    </Wrapper>
    {errorMessage && (
      <ErrorMessage data-testid="gradient-progress-bar-error-msg">{errorMessage}</ErrorMessage>
    )}
  </Container>
);
export default GradientProgressBar;
