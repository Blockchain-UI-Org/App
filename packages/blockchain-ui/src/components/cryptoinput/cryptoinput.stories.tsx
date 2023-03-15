import { Meta, Story } from "@storybook/react";
import { useState } from "react";
import { CryptoInput, ICryptoInputProps } from "./cryptoinput";

export default {
  
  component: CryptoInput,

  title: "Input/ Crypto Input",
  argTypes: {
    value: {
      control: {
        disable: true,
      },
    },
  },
  parameters: {
    backgrounds: {
      default: "white",
      values: [{ name: "white", value: "#fff" }],
    },
  },
} as Meta<ICryptoInputProps>;

const Template: Story<ICryptoInputProps> = (args) => {
  const [val, setValue] = useState<string | number>("");
  return <CryptoInput {...args} value={val} onChange={setValue} />;
};

export const Primary = Template.bind({});

Primary.args = {
  symbol: "DAI",
  value: 10,
  price: 1,
  align: "left",
};
export const RightAligned = Template.bind({});

RightAligned.args = {
  symbol: "BTC",
  value: 10,
  price: 1,
  align: "right",
};

