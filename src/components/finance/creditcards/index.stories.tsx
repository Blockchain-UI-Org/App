import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CreditCard from ".";
import styled from "styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Finance/CreditCards",
  component: CreditCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    themeColor: {
      options: ["green", "yellow", "red", "blue"],
      control: { type: "select" }, // Automatically inferred when 'options' is defined
    },
  },
} as ComponentMeta<typeof CreditCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CreditCard> = (args) => (
  <CreditCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  currency: "BTC",
};

export const Stacked = () => {
  return (
    <StackedWrapper>
      <GreenCard>
        <Template themeColor="green" currency="BTC" />
      </GreenCard>
      <YellowCard>
        <Template themeColor="yellow" />
      </YellowCard>
      <RedCard>
        <Template themeColor="red" />
      </RedCard>
      <BlueCard>
        <Template themeColor="blue" currency="USDC" />
      </BlueCard>
      <BlackCard>
        <Template />
      </BlackCard>
    </StackedWrapper>
  );
};

const StackedWrapper = styled.div`
  position: relative;
`;

const GreenCard = styled.div`
  position: fixed;
  top: 10px;
`;

const YellowCard = styled.div`
  position: fixed;
  top: 100px;
`;
const RedCard = styled.div`
  position: fixed;
  top: 200px;
`;

const BlueCard = styled.div`
  position: fixed;
  top: 300px;
`;

const BlackCard = styled.div`
  position: fixed;
  top: 400px;
`;
