import { Story, Meta } from "@storybook/react";
import { withTheme } from "blockchain-ui/theme";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";
import { Input, InputProps } from "./input";

export default {
  component: Input,
  title: "Input/ Input",
} as Meta;

const InputTemplateWrapper = styled.div`
  padding: 10px;
  border-radius: 10px;
  ${withTheme(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
  }))};
`;

const Template: Story<InputProps> = (args) => (
  <InputTemplateWrapper>
    <Input {...args}></Input>
  </InputTemplateWrapper>
);

export const Basic = Template.bind({});

Basic.args = {
  label: "Label",
};

export const WithPlaceholder = Template.bind({});

WithPlaceholder.args = {
  placeholder: "Input Placeholder",
};

export const WithPrefix = Template.bind({});

WithPrefix.args = {
  placeholder: "Search...",
  prefix: <BiSearch size={20} />,
};

export const Error = Template.bind({});

Error.args = {
  label: "Label",
  error: "Error Message",
  errorAction: {
    onClick: () => {
      alert("clicked");
    },
    text: "Take action",
  },
};
