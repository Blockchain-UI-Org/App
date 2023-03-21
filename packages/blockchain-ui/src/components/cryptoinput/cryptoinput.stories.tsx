import { Meta, Story } from "@storybook/react";
import { useState } from "react";
import { CryptoList } from "../cryptos-list";

import { CryptoInput, ICryptoInputProps } from "./cryptoinput";
import { IBasicToken } from "./CryptoListModal";

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
} as Meta<ICryptoInputProps>;


const Template: Story<ICryptoInputProps> = (args) => {
  const [val, setValue] = useState<string | number>("");
  const [selectedToken, setSelectedToken] = useState<IBasicToken>(CryptoList[2]);
  return (
    <CryptoInput
      {...args}
      selectedToken={selectedToken}
      listOfCurrencies={CryptoList}
      onSelectToken={setSelectedToken}
      value={val}
      onChange={setValue}
    />
  );
};

export const Primary = Template.bind({});


Primary.args = {
  value: 10,
  price: 1,
  align: "left",
};
export const RightAligned = Template.bind({});

RightAligned.args = {
  value: 10,
  price: 1,
  align: "right",
};
