import { CryptoInput } from "./cryptoinput";

export default {
  component: CryptoInput,
  title: "Input/ Crypto Input",
  parameters: {
    backgrounds: {
      default: "white",
      values: [{ name: "white", value: "#fff" }],
    },
  },
};


export const Default = () => <CryptoInput onChange={() => {}} value="" />