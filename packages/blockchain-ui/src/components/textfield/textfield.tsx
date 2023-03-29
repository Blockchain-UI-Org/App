import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { withTheme } from "blockchain-ui/theme";
import { InputDollarIcon } from "../static/images/icons/regular/InputDollarIcon";
import { BackdropProps } from "@mui/material";

export const TextFieldVariants = ["outlined", "filled", "standard"] as const;
export const TextFieldType = ["default", "value", "hovered"] as const;
export const TextFieldSize = ["small", "medium"] as const;

export type ITextFieldVariants = (typeof TextFieldVariants)[number];
export type ITextFieldType = (typeof TextFieldType)[number];
export type ITextFieldSize = (typeof TextFieldSize)[number];

/**
 * Exclude prefix in order to accept it by customizing to ReactNode.
 */
type InputHTMLPropsWithoutPrefix = Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix">;

export interface ITextFieldProps extends InputHTMLPropsWithoutPrefix {
  variant?: ITextFieldVariants;
  // TextFieldSize: ITextFieldSize;
  // TextFieldType: ITextFieldType;
  borderColor?: string;
  hoverBorderColor?: string;
  // hasValue?: boolean;
  value?: string;
  state: string;
  error?: boolean;
  disabled?: boolean;
  types?: string;
  prefix?: boolean;
  InputDollarIcon?: string;
  label?: boolean;
  isValidationValue?: boolean;
}

const Container = styled.div``;

const TextInputField = styled.input<{ error?: boolean; types: string }>`
  width: 500px;
  height: ${(prop) => {
    if (prop.types === "Small") {
      return "40px";
    }
    return "56px";
  }};
  font-size: 16px;
  margin-right: 12px;
  padding: 12px 14px;
  font-weight: 400;
  line-height: 24px;
  color: ${withTheme(({ theme }) => theme.palette.text.primary)};
  border: none;
  background-color: transparent;

  &::placeholder {
    color: ${withTheme(({ theme }) => theme.palette.text.disabled)};
  }
  &:focus {
    outline: none;
    /* border-color: black; */
  }
`;

const TextFieldContainer = styled.div`
  position: relative;
`;

const TextFieldLabel = styled.label<{ hasValue?: boolean; isFocused?: boolean; types: string; prefix?: boolean }>`
  position: absolute;
  top: ${({ hasValue, isFocused }) => (isFocused || hasValue ? "8px" : "30%")};
  margin-left: ${({ hasValue, isFocused }) => (hasValue || isFocused ? "15px" : "40px")};
  background-color: white;
  transform: ${({ hasValue, isFocused }) => (hasValue || isFocused ? "translateY(-100%)" : "none")};
  font-size: ${({ hasValue, isFocused }) => (hasValue || isFocused ? "0.75rem" : "1rem")};
  font-weight: ${({ hasValue, isFocused }) => (hasValue || isFocused ? "400" : "400")};
  color: ${(props) => (props.types === "focus" ? "#212B36" : "#919EAB")};
  transition: all 0.2s ease-in-out;
`;

const InputContainer = styled.div<{ error?: boolean; types: string }>`
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
  background-color: white;
  &:focus-within {
    outline: none;
    border-color: black;
  }
`;

const Icon = styled.div`
  margin-left: 18px;
`;

const ValidationText = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  margin-top: 12px;
`;

export const TextFieldInput: FunctionComponent<ITextFieldProps> = ({
  state,
  error,
  disabled,
  prefix,
  label,
  isValidationValue,
}) => {
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

  console.log(!!fieldValue, isFocused, "isFocused");
  console.log(error, "errorsds");

  return (
    <Container>
      <div style={{ marginBottom: "30px", marginRight: "12px" }}>
        <TextFieldContainer>
          {label && (
            <TextFieldLabel htmlFor="name" hasValue={fieldValue !== "empty"} types={state} isFocused={isFocused}>
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
              error={error}
              disabled={disabled}
              types={state}
            />
          </InputContainer>
        </TextFieldContainer>
        {isValidationValue && <ValidationText>Caption text, description, notification</ValidationText>}
      </div>
    </Container>
  );
};
