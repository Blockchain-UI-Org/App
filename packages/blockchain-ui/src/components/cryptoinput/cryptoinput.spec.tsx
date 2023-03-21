import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { listOfCryptos } from "blockchain-ui/components/cryptos-list";
import { CryptoInput } from "./cryptoinput";

const CryptoList = Object.values(listOfCryptos);

describe("Crypto Input Component", () => {
  it("should render successfully", () => {
    const selectToken = jest.fn();
    const onChangeToken = jest.fn();
    const { baseElement } = render(
      <CryptoInput
        selectedToken={CryptoList[0]}
        listOfCurrencies={CryptoList}
        onSelectToken={selectToken}
        // value={val}
        onChange={onChangeToken}
        price="1"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
