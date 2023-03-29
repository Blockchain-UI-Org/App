import { Story, Meta } from "@storybook/react";
import styled from "styled-components";
import { TextFieldFilled, ITextFieldFilledProps } from "./textfieldfilled";

export default {
  component: TextFieldFilled,
  title: "Input/TextFieldFiled",
} as Meta<ITextFieldFilledProps>;

const states = ["empty", "valued", "hover", "focus", "error", "disabled"];
const adornment = ["empty", "value", "empty", "valued", "empty", "value"];
const helpText = ["empty", "error"];
const sizeValue = ["Medium", "Small"];

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Template = () => {
  return (
    <>
      <Wrapper>
        {states.map((stateValue) => {
          return <TextFieldFilled state={stateValue} prefix={false} background={true} label={true} />;
        })}
      </Wrapper>
      <Wrapper>
        {adornment.map((stateValue) => {
          return <TextFieldFilled state={stateValue} prefix={true} label={true} />;
        })}
      </Wrapper>
      <Wrapper>
        {helpText.map((stateValue) => {
          return <TextFieldFilled state={stateValue} prefix={false} label={true} />;
        })}
      </Wrapper>
      <Wrapper>
        {sizeValue.map((stateValue) => {
          return <TextFieldFilled state={stateValue} prefix={false} label={false} />;
        })}
      </Wrapper>
    </>
  );
};

export const Filled = Template.bind({});
