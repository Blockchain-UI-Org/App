import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { InputDollarIcon } from "../static/images/icons/regular/InputDollarIcon";
import { withTheme } from "blockchain-ui/theme";

type InputHTMLPropsWithoutPrefix = Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix">;

export interface ITextFieldFilledProps extends InputHTMLPropsWithoutPrefix {
  state: string;
  error?: boolean;
  disabled?: boolean;
  types?: string;
  prefix?: boolean;
  background?: boolean;
  label?: boolean;
}

const TextFieldContainer = styled.div`
  position: relative;
`;

const InputContainer = styled.div<{ error?: boolean; types: string; background?: boolean }>`
  display: flex;
  align-items: center;
  border-radius: 8px;
  border: ${(prop) => {
    if (prop.types === "focus" || prop.types === "hover") {
      return "1px solid #212B36";
    }
    if (prop.types === "error") return "1px solid red";
    return `1px solid rgba(145, 158, 171, 0.32)`;
  }};

  width: fit-content;
  background-color: ${(prop) => {
    if (prop.types === "focus" || prop.types === "hover") {
      return "rgba(145, 158, 171, 0.16)";
    }
    if (prop.types === "error") return "rgba(255, 86, 48, 0.08)";
    return `rgba(145, 158, 171, 0.08)`;
  }};
  &:focus-within {
    outline: none;
    border-color: black;
  }
`;

const Icon = styled.div`
  margin-left: 18px;
  /* margin-top: 14px; */
`;

const TextFieldLabel = styled.label<{
  pre?: boolean;
  hasValue?: boolean;
  isFocused?: boolean;
  types: string;

  background?: boolean;
}>`
  position: absolute;
  top: ${({ hasValue, isFocused }) => (hasValue || isFocused ? "20px" : "30%")};
  /* margin-left: ${({ hasValue, isFocused }) => (hasValue || isFocused ? "15px" : "15px")}; */
  /* background-color: white; */
  margin-left: ${({ pre, hasValue, isFocused }) => {
    if (pre) {
      return "43px";
    } else if (hasValue) {
      return "15px";
    }
    return "15px";
  }};

  transform: ${({ hasValue, isFocused }) => (hasValue || isFocused ? "translateY(-100%)" : "none")};
  font-size: ${({ hasValue, isFocused }) => (hasValue || isFocused ? "0.75rem" : "1rem")};
  font-weight: ${({ hasValue, isFocused }) => (hasValue || isFocused ? "400" : "400")};
  color: ${(props) => (props.types === "error" ? "#FF5630" : "#919EAB")};
  transition: all 0.2s ease-in-out;
`;

const TextInputField = styled.input<{ error?: boolean; types: string; background?: boolean; label?: boolean }>`
  width: 500px;
  height: ${(prop) => {
    if (prop.types === "Small") {
      return "40px";
    }
    return "56px";
  }};
  font-size: 16px;
  margin-right: 12px;
  padding-top: ${({ label }) => (label ? "22px" : "12px")};
  padding-left: ${({ label }) => (label ? "15px" : "14px")};
  padding-right: ${({ label }) => (label ? "15px" : "14px")};
  padding-bottom: ${({ label }) => (label ? "10px" : "12px")};
  font-weight: 400;
  line-height: 24px;
  color: ${(prop) => {
    if (prop.types === "disabled") {
      return withTheme(({ theme }) => theme.palette.text.disabled);
    }
    return withTheme(({ theme }) => theme.palette.text.primary);
  }};
  /* color: ${withTheme(({ theme }) => theme.palette.text.primary)}; */
  border: none;
  background-color: ${({ background }) => (background ? "rgba(145, 158, 171, 0.24)" : "transparent")};
  /* background-color: ${(prop) => {
    if (prop.background) {
      return "rgba(145, 158, 171, 0.24)";
    }
    return "transparent";
  }}; */

  &::placeholder {
    color: ${withTheme(({ theme }) => theme.palette.text.disabled)};
  }
  &:focus {
    outline: none;
    /* border-color: black; */
  }
`;

export const TextFieldFilled: FunctionComponent<ITextFieldFilledProps> = ({ state, prefix, background, label }) => {
  const [fieldValue, setFieldValue] = useState<string>(state);
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
    <div style={{ marginBottom: "30px", marginRight: "12px" }}>
      <TextFieldContainer>
        {label && (
          <TextFieldLabel
            htmlFor="name"
            hasValue={fieldValue !== "empty"}
            types={state}
            pre={prefix}
            isFocused={isFocused}
          >
            Label
          </TextFieldLabel>
        )}

        <InputContainer types={state}>
          {prefix && (
            <Icon>
              <InputDollarIcon />
            </Icon>
          )}
          <TextInputField
            id="name"
            name="name"
            value={state !== "empty" ? fieldValue : undefined}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            types={state}
            disabled={state === "disabled"}
            error={state === "error"}
            label={label}
          />
        </InputContainer>
      </TextFieldContainer>
    </div>
  );
};
