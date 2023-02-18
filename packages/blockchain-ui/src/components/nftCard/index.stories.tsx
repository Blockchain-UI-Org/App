import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NftCard } from ".";
import styled from "styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "NFT/NftCard",
  component: NftCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof NftCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NftCard> = (args) => <NftCard {...args} src={`url("/assets/nft9.jpeg")`} />;

const GroupTemplate: ComponentStory<typeof NftCard> = (args) => (
  <Container>
    <NftCard {...args} src={`url("/assets/nft1.jpeg")`} />
    <br />
    <NftCard {...args} src={`url("/assets/nft2.jpeg")`} />
    <br />
    <NftCard {...args} src={`url("/assets/nft3.jpeg")`} />
    <br />
    <NftCard {...args} src={`url("/assets/nft4.png")`} />
    <br />
    <NftCard {...args} src={`url("/assets/nft5.webp")`} />
    <br />
    <NftCard {...args} src={`url("/assets/nft6.jpeg")`} />
    <br />
    <NftCard {...args} src={`url("/assets/nft7.jpeg")`} />
    <br />
    <NftCard {...args} src={`url("/assets/nft8.jpeg")`} />
    <br />
    <NftCard {...args} src={`url("/assets/nft9.jpeg")`} />
    <br />
    <NftCard {...args} src={`url("/assets/nft10.png")`} />
  </Container>
);

export const Default = Template.bind({});

export const Group = GroupTemplate.bind({});

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
