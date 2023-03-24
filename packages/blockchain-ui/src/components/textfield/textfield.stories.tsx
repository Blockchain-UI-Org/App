import { Story, Meta } from "@storybook/react";
import { TextFieldInput, ITextFieldProps, TextFieldVariants } from "./textfield";
// import { withTheme } from "blockchain-ui/theme";
// import styled from "styled-components";

export default {
  component: TextFieldInput,
  title: "Input/TextField",
} as Meta<ITextFieldProps>;

const Template = () => (
  <div>
    {TextFieldVariants.map((variant) => {
      return <TextFieldInput variant={variant} />;
    })}
  </div>
);

export const Outlined = Template.bind({});

// Outlined.args = {};
