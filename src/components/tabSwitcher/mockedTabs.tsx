import { CryptoIcon } from "../icon/icon";

export const mockedTabs = {
  BASIC: [
    { title: "Tab 1", content: <div>Content 1</div> },
    { title: "Tab 2", content: <div>Content 2</div> },
  ],
  ICON: [
    {
      title: <CryptoIcon cryptoSymbol="BTC" size="large" />,
      content: <div>Content 1</div>,
    },
    {
      title: <CryptoIcon cryptoSymbol="ETH" size="large" />,
      content: <div>Content 2</div>,
    },
  ],
  MANY: [
    { title: "Tab 1", content: <div>Content 1</div> },
    { title: "Tab 2", content: <div>Content 2</div> },
    { title: "Tab 3", content: <div>Content 3</div> },
    { title: "Tab 4", content: <div>Content 4</div> },
  ],
};
