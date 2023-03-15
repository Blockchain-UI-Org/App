
import { ComponentStory, Meta } from "@storybook/react";
import NftCard, { NftCardProps } from "./NftCard";
import styled from "styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "NFT/NftCard",
  component: NftCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as Meta<NftCardProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NftCard> = (args) => <NftCard  {...args}  src={`/assets/nft9.jpeg`} />;

const GroupTemplate: ComponentStory<typeof NftCard> = (args) => (
  <Container>
    <NftCard {...args} src={`/assets/nft1.jpeg`} />
    <br />
    <NftCard {...args} src={`/assets/nft2.jpeg`} />
    <br />
    <NftCard {...args} src={`/assets/nft3.jpeg`} />
    <br />
    <NftCard {...args} src={`/assets/nft4.png`} />
    <br />
    <NftCard {...args} src={`/assets/nft5.webp`} />
    <br />
    <NftCard {...args} src={`/assets/nft6.jpeg`} />
    <br />
    <NftCard {...args} src={`/assets/nft7.jpeg`} />
    <br />
    <NftCard {...args} src={`/assets/nft8.jpeg`} />
    <br />
    <NftCard {...args} src={`/assets/nft9.jpeg`} />
    <br />
    <NftCard {...args} src={`/assets/nft10.png`} />
  </Container>
);

export const Default = Template.bind({});

Default.args ={
  title: "Clone X 12420",
  price: "4.120 ETH",
  lastPrice: "4.180 ETH"
}

export const Group = GroupTemplate.bind({});

Group.args = {
  title: "Clone X 12420",
  price: "4.120 ETH",
  lastPrice: "4.180 ETH"
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
