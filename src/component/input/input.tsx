import { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { withTheme } from "theme";

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
  color: ${withTheme(({ theme }) => theme.components.Input.label.color)};
`;

type StyledInputType = React.InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

export const StyledInput = styled.input<StyledInputType>`
  border-radius: 8px;

  height: 64px;
  box-sizing: border-box;
  padding: 16px;
  font-size: 20px;
  font-weight: 700;
  margin: 12px 0;
  font-family: inherit;
  ${withTheme(({ theme }) => css(theme.components.Input.box.common))}
  &:focus {
    outline: none;
  }
  &:focus-visible {
    border-color: ${withTheme(
      ({ theme }) => theme.components.Input.box.focusVisible.borderColor
    )};
    color: ${withTheme(({ theme }) => theme.palette.common.black)};
  }

  &:not(:placeholder-shown) {
    color: ${withTheme(({ theme }) => theme.palette.common.black)};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${withTheme(({ theme }) => theme.components.Input.box.error.color)};
    `};
`;

export const ErrorWrapper = styled.div`
  display: flex;
  gap: 4px;

  button {
    border: none;
    background: none;
    cursor: pointer;
    color: ${withTheme(
      ({ theme }) => theme.components.Input.box.focusVisible.borderColor
    )};;
    font-family: ${withTheme(({ theme }) => theme.typography.common.fontFamily)};
    font-size: 16px;
  }
`;

export const ErrorMessage = styled.span`
  color: ${withTheme(({ theme }) => theme.components.Input.box.error.color)};
  font-size: 16px;
  font-weight: 400;

  &&::after {
    content: ".";
  }
`;
