import { Story, Meta } from "@storybook/react";
import styled from "styled-components";
import { ReactElement } from "react";
import { CryptoIcon, CryptoIconProps } from "../icon";
import { cryptoIcons } from "../../static/images/icons/crypto";
import { Inline, Stack } from "theme/layouts";

export default {
  component: CryptoIcon,
  title: "General/Crypto Icon",
} as Meta;

const Layout = styled(Inline)`
  flex-wrap: wrap;
`;

const Wrapper = styled(Stack)`
  margin: 50px;
`;
  //@ts-ignore
const imageDisplay = (args) => {
  const display: ReactElement[] = [];
  for (const [key, value] of Object.entries(cryptoIcons).sort(function (a, b) {
    const nameA = a[0].toLowerCase(),
      nameB = b[0].toLowerCase();
    if (nameA < nameB)
      //sort string ascending
      return -1;
    if (nameA > nameB) return 1;
    return 0; //default return value (no sorting)
  })) {
    display.push(
      <Wrapper alignItems="center" gap="0.5rem" key={key}>
        <span>{key}</span>
        <CryptoIcon cryptoSymbol={key} src={value} {...args} />
      </Wrapper>
    );
  }
  return display;
};

const AllIconsTemplate: Story<CryptoIconProps> = (args) => (
  <Layout>{imageDisplay(args)}</Layout>
);

export const AvailableIcons = AllIconsTemplate.bind({});

AvailableIcons.args = {
  size: "medium",
};

AvailableIcons.argTypes = {
  size: {
    options: ["xsmall", "small", "medium", "large"],
    control: { type: "radio" },
  },
};
