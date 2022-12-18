import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CreditCard from "./";
import styled from "styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Finance/CreditCards",
  component: CreditCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    themeColor: {
      options: ["default", "green", "brown", "red", "blue"],
      control: { type: "select" }, // Automatically inferred when 'options' is defined
    },
  },
} as ComponentMeta<typeof CreditCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CreditCard> = (args) => (
  <CreditCard {...args} />
);

const Group: ComponentStory<typeof CreditCard> = (args) => (
  <CreditCard {...args} />
);

export const Default = Template.bind({});

export const Stacked = () => {
  return (
    <StackedWrapper>
      <Template />
      <GreenCard>
        <Template themeColor="green" />
      </GreenCard>
      <BrownCard>
        <Template themeColor="brown" />
      </BrownCard>
      <RedCard>
        <Template themeColor="red" />
      </RedCard>
      <BlueCard>
        <Template themeColor="blue" />
      </BlueCard>
    </StackedWrapper>
  );
};

const StackedWrapper = styled.div`
  position: relative;
`;

const GreenCard = styled.div`
  position: fixed;
  top: 100px;
`;

const BrownCard = styled.div`
  position: fixed;
  top: 200px;
`;
const RedCard = styled.div`
  position: fixed;
  top: 300px;
`;

const BlueCard = styled.div`
  position: fixed;
  top: 400px;
`;
