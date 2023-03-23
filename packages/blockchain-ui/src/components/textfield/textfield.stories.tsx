import { Story, Meta } from "@storybook/react";
import { TextFieldInput, textFieldProps } from "./textfield";
import { withTheme } from "blockchain-ui/theme";
import styled from "styled-components";

export default {
  component: TextFieldInput,
  title: "TextField/TextField",
} as Meta;

const InputTemplateWrapper = styled.div`
  padding: 10px;
  border-radius: 10px;
  ${withTheme(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
  }))};
`;

const Template: Story<textFieldProps> = (args) => (
  <InputTemplateWrapper>
    <TextFieldInput {...args}></TextFieldInput>
  </InputTemplateWrapper>
);

export const Outlined = Template.bind({});

Outlined.args = {
  labelText: "Label",
  width: "40%",
  hoverBorderColor: "",
  marginRight: "30px",
  focusedColor: "",
  borderColor: "#FF5630",
};
