import { FunctionComponent, ReactNode } from "react";
import styled, { css } from "styled-components";
import { withTheme } from "blockchain-ui/theme";

export interface ErrorAction {
  onClick: () => void;
  text: string;
}

/**
 * Exclude prefix in order to accept it by customizing to ReactNode.
 */
type InputHTMLPropsWithoutPrefix = Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix">;

export interface InputProps extends InputHTMLPropsWithoutPrefix {
  label?: string;
  error?: string;
  prefix?: string | ReactNode;
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
  prefix,
  ...props
}) => {
  const hasError = !!error?.trim();
  return (
    <Container block={block}>
      {label && <Label htmlFor={label} aria-label={label}>{label}</Label>}

      <InputWrapper hasError={hasError} id={label}>
        {prefix && <Prefix>{prefix}</Prefix>}
        <StyledInput id={label} autoComplete="off" {...props} />
      </InputWrapper>

      <ErrorWrapper>
        {hasError && <ErrorMessage>{error}</ErrorMessage>}
        {errorAction?.onClick && <button onClick={errorAction.onClick}>{errorAction.text}</button>}
      </ErrorWrapper>
    </Container>
  );
};

export const Prefix = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${withTheme(({ theme }) => theme.palette.text.disabled)};
`;

type StyledInputType = React.InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

export const InputWrapper = styled.div<StyledInputType>`
  border-radius: 8px;
  box-sizing: border-box;
  padding: 12px 14px;
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  border: 1px solid ${withTheme(({ theme }) => theme.components.Input.box.common.outlined)};
  color: ${withTheme(({ theme }) => theme.palette.text.primary)};
  &:focus-within {
    border-color: ${withTheme(({ theme }) => theme.palette.border.primary)};
    color: ${withTheme(({ theme }) => theme.palette.text.primary)};
  }
  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${withTheme(({ theme }) => theme.components.Input.box.error.color)};
    `};
`;

export const StyledInput = styled.input`
  flex-grow: 1;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  font-family: inherit;
  background: transparent;
  border: none;
  color: ${withTheme(({ theme }) => theme.palette.text.primary)};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${withTheme(({ theme }) => theme.palette.text.disabled)};
  }
`;

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

export const ErrorWrapper = styled.div`
  display: flex;
  gap: 4px;
  button {
    border: none;
    background: none;
    cursor: pointer;
    color: ${withTheme(({ theme }) => theme.components.Input.box.focusVisible.borderColor)};
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
