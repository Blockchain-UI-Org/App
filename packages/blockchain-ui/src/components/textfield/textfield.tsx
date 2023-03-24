import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { withTheme } from "blockchain-ui/theme";

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
}

const Container = styled.div``;

const TextInputField = styled.input`
  width: 400px;
  height: 56px;
  font-size: 16px;
  margin-right: 12px;
  padding: 12px 14px;
  font-weight: 400;
  line-height: 24px;
  color: ${withTheme(({ theme }) => theme.palette.text.primary)};
  border: 1px solid #919eab51;
  border-radius: 8px;

  &::placeholder {
    color: ${withTheme(({ theme }) => theme.palette.text.disabled)};
  }
  &:focus {
    outline: none;
    border-color: #4c8bf5;
  }
`;

const TextFieldContainer = styled.div`
  position: relative;
`;

const TextFieldLabel = styled.label<{ hasValue?: boolean; isFocused?: boolean }>`
  position: absolute;
  top: ${({ hasValue, isFocused }) => (hasValue || isFocused ? "8px" : "30%")};
  margin-left: ${({ hasValue, isFocused }) => (hasValue || isFocused ? "15px" : "13px")};
  background-color: white;
  transform: ${({ hasValue, isFocused }) => (hasValue || isFocused ? "translateY(-100%)" : "none")};
  font-size: ${({ hasValue, isFocused }) => (hasValue || isFocused ? "0.75rem" : "1rem")};
  font-weight: ${({ hasValue, isFocused }) => (hasValue || isFocused ? "500" : "400")};
  color: ${({ hasValue, isFocused }) => (hasValue || isFocused ? "#919EAB" : "#919EAB")};
  transition: all 0.2s ease-in-out;
`;

export const TextFieldInput: FunctionComponent<ITextFieldProps> = () => {
  const [fieldValue, setFieldValue] = useState<string>("Value");
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

  console.log(isFocused);

  return (
    <Container>
      <div style={{ display: "flex", marginBottom: "30px" }}>
        <div>
          <TextInputField placeholder="Label" />
        </div>
        <div>
          <TextFieldContainer>
            <TextFieldLabel htmlFor="name" hasValue={!!fieldValue}>
              {" "}
              Label
            </TextFieldLabel>
            <TextInputField
              id="name"
              name="name"
              value={fieldValue}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </TextFieldContainer>
        </div>
      </div>
    </Container>
  );
};
