import { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { colors, theme } from "../theme";

const { black, grey300, grey500, blue500, error500 } = colors;
const { FONT_FAMILY } = theme.typography;

export interface ErrorAction {
  onClick: () => void;
  text: string;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  block?: boolean;
  errorAction?: {
    onClick?: () => void;
    text: string;
  };
}

export const Input: FunctionComponent<InputProps> = ({
  error,
  label,
  block = false,
  errorAction,
  ...props
}) => {
  const hasError = !!error?.trim();
  return (
    <Container block={block}>
      {label && <Label htmlFor={label}>{label}</Label>}
      <StyledInput hasError={hasError} id={label} {...props} />
      <ErrorWrapper>
        {hasError && <ErrorMessage>{error}</ErrorMessage>}
        {errorAction?.onClick && (
          <button onClick={errorAction.onClick}>{errorAction.text}</button>
        )}
      </ErrorWrapper>
    </Container>
  );
};

export const Container = styled.div<{ block: boolean }>`
  display: flex;
  flex-direction: column;
  width: ${({ block }) => (block ? "100%" : "416px")};

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: ${black};
`;

type StyledInputType = React.InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

export const StyledInput = styled.input<StyledInputType>`
  border-radius: 8px;
  border: 1px solid ${grey300};
  height: 64px;
  box-sizing: border-box;
  padding: 16px;
  font-size: 20px;
  font-weight: 700;
  color: ${grey500};
  margin: 12px 0;
  font-family: inherit;

  &:focus {
    outline: none;
  }

  &:focus-visible {
    border-color: ${blue500};
    color: ${black};
  }

  &:not(:placeholder-shown) {
    color: ${black};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${error500};
    `};
`;

export const ErrorWrapper = styled.div`
  display: flex;
  gap: 4px;

  button {
    border: none;
    background: none;
    cursor: pointer;
    color: ${blue500};
    font-family: ${FONT_FAMILY};
    font-size: 16px;
  }
`;

export const ErrorMessage = styled.span`
  color: ${error500};
  font-size: 16px;
  font-weight: 400;

  &&::after {
    content: ".";
  }
`;
