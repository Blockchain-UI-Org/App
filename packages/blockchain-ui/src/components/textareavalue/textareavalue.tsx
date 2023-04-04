import { withTheme } from "blockchain-ui/theme";
import React, { useState } from "react";
import styled from "styled-components";

type InputHTMLPropsWithoutPrefix = Omit<React.InputHTMLAttributes<HTMLInputElement>, "perfix">;

export interface ITextAreaValueProps extends InputHTMLPropsWithoutPrefix {
  label: string;
  value: string;
  onHover: boolean;
  isFocus: boolean;
  isDisabled: boolean;
  isError: boolean;
  isHelpText: boolean;
  validationColor: boolean;
}

const Container = styled.div`
  position: relative;
`;

const TextFieldLabel = styled.label<{ hasValue?: boolean; isFocused?: boolean; prefix?: boolean; isError: boolean }>`
  position: absolute;
  top: ${({ hasValue, isFocused }) => (isFocused || hasValue ? "8px" : "16px")};
  margin-left: ${({ hasValue, isFocused }) => (hasValue || isFocused ? "15px" : "20px")};
  background-color: white;
  transform: ${({ hasValue, isFocused }) => (hasValue || isFocused ? "translateY(-100%)" : "none")};
  font-size: ${({ hasValue, isFocused }) => (hasValue || isFocused ? "0.75rem" : "1rem")};
  font-weight: ${({ hasValue, isFocused }) => (hasValue || isFocused ? "400" : "400")};
  color: ${(props) => (props.isError ? "#FF5630" : "#919eab")};
  transition: all 0.2s ease-in-out;
`;

const InputTextAreaValue = styled.textarea<{
  onHover: boolean;
  isFocus: boolean;
  isError: boolean;
  isHelpText: boolean;
}>`
  width: ${(props) => (props.isHelpText ? "340px" : "220px")};
  height: 104px;
  font-size: 16px;
  margin-right: 12px;
  padding: 16px 14px;
  font-weight: 400;
  line-height: 24px;
  color: ${withTheme(({ theme }) => theme.palette.text.primary)};
  border: ${(props) => (props.isError ? "1px solid #FF5630" : "1px solid rgba(145, 158, 171, 0.32)")};
  background-color: transparent;
  border-radius: 8px;
  resize: none;

  ::placeholder {
    color: ${withTheme(({ theme }) => theme.palette.text.disabled)};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &:focus {
    border: ${(props) => (props.isFocus ? "1px solid #212B36" : "1px solid rgba(145, 158, 171, 0.32)")};
    outline: none;
  }
  &:hover {
    border: ${(props) => (props.onHover ? "1px solid #212B36" : "1px solid rgba(145, 158, 171, 0.32)")};
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${withTheme(({ theme }) => theme.palette.text.disabled)};
    opacity: 0.48;
    border-radius: 12px;
  }
`;

const ValidationText = styled.div<{ validationColor: boolean }>`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  margin: 6px 20px;
  color: ${(props) => (props.validationColor ? "#FF5630" : withTheme(({ theme }) => theme.palette.text.disabled))};
`;

export const TextAreaValue: React.FC<ITextAreaValueProps> = ({
  value,
  label,
  onHover,
  isFocus,
  isDisabled,
  isHelpText,
  isError,
  validationColor,
}) => {
  const [fieldValue, setFieldValue] = useState<string>("value");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(true);
  };

  const handleChange = (e: any) => {
    setFieldValue(e.target.value);
  };

  return (
    <Container>
      <TextFieldLabel htmlFor="name" hasValue={!!fieldValue} isFocused={isFocused} isError={isError} aria-label={label}>
        {label}
      </TextFieldLabel>
      <InputTextAreaValue
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        data-testid="textArea-with-value"
        // value={value}
        onHover={onHover}
        isFocus={isFocus}
        disabled={isDisabled}
        isError={isError}
        isHelpText={isHelpText}
      >
        {value}
      </InputTextAreaValue>
      {isHelpText && (
        <ValidationText validationColor={validationColor}>Caption text, description, notification</ValidationText>
      )}
    </Container>
  );
};
