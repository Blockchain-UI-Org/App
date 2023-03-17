import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { CryptoListModal } from "./CryptoListModal";
import { listOfCryptos } from "blockchain-ui/components/cryptos-list";
import userEvent from "@testing-library/user-event";

const CryptoList = Object.values(listOfCryptos);

describe("CryptListModal", () => {
  it("should render successfully", () => {
    const mock = jest.fn();
    const closeMock = jest.fn();
    const { baseElement } = render(
      <CryptoListModal tokens={CryptoList} onClose={closeMock} onSelect={mock} selectedToken={CryptoList[0]} />
    );
    expect(baseElement).toBeTruthy();
  });

  it("should call close callback when close button is clicked", () => {
    const mock = jest.fn();
    const closeMock = jest.fn();
    const { getByTestId } = render(
      <CryptoListModal tokens={CryptoList} onClose={closeMock} onSelect={mock} selectedToken={CryptoList[0]} />
    );
    const closeBtn = getByTestId("close-button");
    userEvent.click(closeBtn);

    expect(closeMock).toHaveBeenCalledTimes(1);
  });

  it("should call close callback when overlay is clicked", () => {
    const mock = jest.fn();
    const closeMock = jest.fn();
    const { getByTestId } = render(
      <CryptoListModal tokens={CryptoList} onClose={closeMock} onSelect={mock} selectedToken={CryptoList[0]} />
    );
    const closeBtn = getByTestId("overlay");
    userEvent.click(closeBtn);

    expect(closeMock).toHaveBeenCalledTimes(1);
  });

  it("should not call close callback when header is clicked", () => {
    const mock = jest.fn();
    const closeMock = jest.fn();
    const { getByTestId } = render(
      <CryptoListModal tokens={CryptoList} onClose={closeMock} onSelect={mock} selectedToken={CryptoList[0]} />
    );
    const closeBtn = getByTestId("header");
    userEvent.click(closeBtn);

    expect(closeMock).toHaveBeenCalledTimes(0);
  });

});
