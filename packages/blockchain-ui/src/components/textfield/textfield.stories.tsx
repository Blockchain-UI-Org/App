import { Story, Meta } from "@storybook/react";
import { TextFieldInput, ITextFieldProps, TextFieldVariants } from "./textfield";
import styled from "styled-components";

// import { withTheme } from "blockchain-ui/theme";
// import styled from "styled-components";

export default {
  component: TextFieldInput,
  title: "Input/TextField",
} as Meta<ITextFieldProps>;

const states = ["empty", "valued", "hover", "focus", "error", "disabled"];
const adornment = [
  {
    type: "empty",
    icon: "doller",
  },
  {
    type: "valued",
    icon: "dollar",
  },
  {
    type: "hover",
    icon: "heart",
  },
  {
    type: "focus",
    icon: "heart",
  },
  {
    type: "error",
    icon: "heart",
  },
  {
    type: "disabled",
    icon: "heart",
  },
];
// const adornment = ["empty", "value", "empty", "valued", "empty", "value"];
const helpText = ["empty", "error"];
const sizeValue = ["Medium", "Small"];

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Template = () => (
  <Wrapper>
    {states.map((stateValue) => {
      return (
        <TextFieldInput
          state={stateValue}
          value={stateValue !== "empty" ? stateValue : undefined}
          error={stateValue === "error"}
          disabled={stateValue === "disabled"}
          label={true}
          isValidationValue={false}
        />
      );
    })}

    {adornment.map((stateValue) => {
      return (
        <TextFieldInput
          state={stateValue.type}
          value={stateValue.type !== "empty" ? stateValue.type : undefined}
          error={stateValue.type === "error"}
          disabled={stateValue.type === "disabled"}
          prefixIcon={stateValue.icon}
          prefix={true}
          label={true}
          isValidationValue={false}
        />
      );
    })}

    {helpText.map((helpText) => {
      return (
        <TextFieldInput
          state={helpText}
          value={helpText !== "empty" ? helpText : undefined}
          error={true}
          label={true}
          isValidationValue={true}
        />
      );
    })}

    {sizeValue.map((size) => {
      return (
        <TextFieldInput
          state={size}
          value={size}
          error={false}
          disabled={false}
          label={false}
          isValidationValue={false}
        />
      );
    })}
  </Wrapper>
);

export const Outlined = Template.bind({});
