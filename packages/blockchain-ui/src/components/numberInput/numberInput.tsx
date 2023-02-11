import { FunctionComponent } from "react";
import styled, { css } from "styled-components";
// import { colors } from "blockchain-ui/theme";
import {
  ErrorMessage,
  Label,
  Container,
  StyledInput,
  ErrorWrapper,
} from "../input/input";
import { CryptoIcon } from "../icon/icon";
import { CryptoSymbols } from "../static/types/crypto";
import { withTheme } from "blockchain-ui/theme";

// const { black, grey300, blue100, blue500, error500, grey700 } = colors;

export interface NumberInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  block?: boolean;
  handleMax?: () => void;
  icon?: CryptoSymbols;
  errorAction?: {
    onClick: () => void;
    text: string;
  };
  balanceAmount?: number | string;
  balanceSize?: "regular" | "small";
}

export const NumberInput: FunctionComponent<NumberInputProps> = ({
  error,
  label,
  block = false,
  handleMax,
  icon,
  errorAction,
  balanceAmount,
  balanceSize = "regular",
  ...props
}) => {
  const hasError = !!error?.trim();
  const blockInvalidChar = (e: { key: string; preventDefault: () => any }) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

  return (
    <Container block={block}>
      <InputHeader>
        {label && <Label htmlFor={label}>{label}</Label>}
        {balanceAmount && (
          <Balance size={balanceSize}>Balance: {balanceAmount}</Balance>
        )}
      </InputHeader>
      <InputContainer hasError={hasError}>
        {icon && <CryptoIcon size="small" cryptoSymbol={icon} />}
        <CustomInput
          onKeyDown={blockInvalidChar}
          type="number"
          id={label}
          {...props}
        />
        {handleMax && <MaxButton onClick={handleMax}>Max</MaxButton>}
      </InputContainer>
      <ErrorWrapper>
        {hasError && <ErrorMessage>{error}</ErrorMessage>}
        {errorAction?.onClick && (
          <button onClick={errorAction.onClick}>{errorAction.text}</button>
        )}
      </ErrorWrapper>
    </Container>
  );
};

const InputContainer = styled.div<{ hasError: boolean }>`
  display: flex;
  border: 1px solid ${withTheme(({theme}) => theme.palette.grey[300])};
  border-radius: 8px;
  width: auto;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  font-family: "DM Sans";
  margin: 12px 0;
  box-sizing: border-box;

  &:focus-within {
    border-color: ${withTheme(({theme}) => theme.palette.grey[300])};
    color: ${withTheme(({theme}) => theme.palette.common.black)};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${withTheme(({theme}) => theme.palette.error.color)};
    `}
`;

const CustomInput = styled(StyledInput)`
  border: none;
  margin: 0;
`;

const MaxButton = styled.button`
  background-color: ${withTheme(({theme}) => theme.palette.info.bg)};
  color: ${withTheme(({theme}) => theme.palette.info.midtone)};
  border: none;
  border-radius: 20px;
  height: 24px;
  padding: 2px 12px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
`;

const Balance = styled.div<{ size: "regular" | "small" }>`
  font-size: ${({ size }) => (size === "regular" ? "16px" : "14px")};
  font-weight: 400;
  color: ${withTheme(({theme}) => theme.palette.grey[700])};;
  font-family: inherit;
`;

const InputHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
