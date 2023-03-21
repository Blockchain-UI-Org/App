import { fireEvent, getByRole, getByText, render } from "@testing-library/react";
import "@testing-library/jest-dom";

import { CryptoList } from "blockchain-ui/components/cryptos-list";
import { CryptoInput } from "./cryptoinput";
import userEvent from "@testing-library/user-event";

describe("Crypto Input Component", () => {
  it("should render successfully", () => {
    const selectToken = jest.fn();
    const onChangeToken = jest.fn();
    const { baseElement } = render(
      <CryptoInput
        selectedToken={CryptoList[0]}
        listOfCurrencies={CryptoList}
        onSelectToken={selectToken}
        onChange={onChangeToken}
        price="1"
      />
    );
    expect(baseElement).toBeTruthy();
  });

  it("should render the icon of token passed", () => {
    const selectToken = jest.fn();
    const onChangeToken = jest.fn();
    const { getByTestId } = render(
      <CryptoInput
        selectedToken={CryptoList[0]}
        listOfCurrencies={CryptoList}
        onSelectToken={selectToken}
        onChange={onChangeToken}
        price="1"
      />
    );
    expect(getByTestId(CryptoList[0].name)).toBeTruthy();
  });

  it("should have CryptoList Modal closed bt default", () => {
    const selectToken = jest.fn();
    const onChangeToken = jest.fn();
    const { queryByTestId } = render(
      <CryptoInput
        selectedToken={CryptoList[0]}
        listOfCurrencies={CryptoList}
        onSelectToken={selectToken}
        onChange={onChangeToken}
        price="1"
      />
    );
    expect(queryByTestId("overlay")).not.toBeTruthy();
  });

  it("should have CryptoList Modal open when icon is clicked", () => {
    const selectToken = jest.fn();
    const onChangeToken = jest.fn();
    const { queryByTestId, getByTestId } = render(
      <CryptoInput
        selectedToken={CryptoList[0]}
        listOfCurrencies={CryptoList}
        onSelectToken={selectToken}
        onChange={onChangeToken}
        price="1"
      />
    );

    userEvent.click(getByTestId(CryptoList[0].name));

    expect(queryByTestId("overlay")).toBeTruthy();
  });

  it("should show symbol of token passed as input", () => {
    const selectToken = jest.fn();
    const onChangeToken = jest.fn();
    const { getByText } = render(
      <CryptoInput
        selectedToken={CryptoList[0]}
        listOfCurrencies={CryptoList}
        onSelectToken={selectToken}
        onChange={onChangeToken}
        value="100.00"
        price="1"
      />
    );

    const symbol = getByText(CryptoList[0].symbol);

    expect(symbol).toBeTruthy();
  });

  it("should show value in usd of token passed as input", () => {
    const selectToken = jest.fn();
    const onChangeToken = jest.fn();
    const { getByText } = render(
      <CryptoInput
        selectedToken={CryptoList[0]}
        listOfCurrencies={CryptoList}
        onSelectToken={selectToken}
        onChange={onChangeToken}
        value="100.00"
        price="3"
      />
    );

    const priceDisplay = getByText("$(300)");

    expect(priceDisplay).toBeTruthy();
  });

  it("should show value passed as prop", () => {
    const selectToken = jest.fn();
    const onChangeToken = jest.fn();
    const { getByTestId } = render(
      <CryptoInput
        selectedToken={CryptoList[0]}
        listOfCurrencies={CryptoList}
        onSelectToken={selectToken}
        onChange={onChangeToken}
        value="100.00"
        price="3"
      />
    );

    const input = getByTestId("input") as HTMLInputElement;

    expect(input).toBeTruthy();
    expect(input.value).toEqual("100.00");
  });

  it("should call onChange handle when input value is changed", () => {
    const selectToken = jest.fn();
    const onChangeToken = jest.fn();
    const { getByTestId } = render(
      <CryptoInput
        selectedToken={CryptoList[0]}
        listOfCurrencies={CryptoList}
        onSelectToken={selectToken}
        onChange={onChangeToken}
        value="100.00"
        price="3"
      />
    );

    const input = getByTestId("input") as HTMLInputElement;

    fireEvent.change(input, { target: { value: 919.90021232247 } });

    expect(onChangeToken).toHaveBeenCalledWith("919.90021232");
  });

  it("should limit number length to 16 digits", () => {
    const selectToken = jest.fn();
    const onChangeToken = jest.fn();
    const { getByTestId } = render(
      <CryptoInput
        selectedToken={CryptoList[0]}
        listOfCurrencies={CryptoList}
        onSelectToken={selectToken}
        onChange={onChangeToken}
        value="100.00"
        price="3"
      />
    );

    const input = getByTestId("input") as HTMLInputElement;

    fireEvent.change(input, { target: { value: 21003331133391.212 } });

    expect(onChangeToken).toHaveBeenCalledWith("21003331133391.21");
  });

  it("should call onSelectToken when some other token is selected", () => {
    const selectToken = jest.fn();
    const onChangeToken = jest.fn();
    const { getByTestId, getByText } = render(
      <CryptoInput
        selectedToken={CryptoList[0]}
        listOfCurrencies={CryptoList}
        onSelectToken={selectToken}
        onChange={onChangeToken}
        price="1"
      />
    );

    userEvent.click(getByTestId(CryptoList[0].name));

    userEvent.click(getByText(CryptoList[4].name));
    expect(selectToken).toHaveBeenCalledWith(expect.objectContaining({ name: CryptoList[4].name }));
  });
});
