import { ReactElement } from "react";
import { Story, Meta } from "@storybook/react";
import styled from "styled-components";
import { Icon, IconProps } from "./icon";
import { regularIcons } from "../static/images/icons/regular";

export default {
  component: Icon,
  title: "General/Regular Icon",
} as Meta;

const Button = styled.button`
  background: #f3efff;
  border: none;
  border-radius: 50px;
  height: 100px;
  width: 100px;
`;
//@ts-ignore
const imageDisplay = (args) => {
  const display: ReactElement[] = [];
  for (const [key, value] of Object.entries(regularIcons).sort(function (a, b) {
    const nameA = a[0].toLowerCase(),
      nameB = b[0].toLowerCase();
    if (nameA < nameB)
      //sort string ascending
      return -1;
    if (nameA > nameB) return 1;
    return 0; //default return value (no sorting)
  })) {
    display.push(
      <Wrapper>
        {key}
        <Button>
          <Icon name={key} src={value} {...args} />
        </Button>
      </Wrapper>
    );
  }
  return display;
};

const AllIconsTemplate: Story<IconProps> = (args) => (
  <Layout>{imageDisplay(args)}</Layout>
);

export const AvailableIcons = AllIconsTemplate.bind({});
AvailableIcons.args = {
  size: "xlarge",
};

AvailableIcons.argTypes = {
  size: {
    options: ["small", "medium", "large", "xlarge"],
    control: { type: "radio" },
  },
};

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px;
`;
