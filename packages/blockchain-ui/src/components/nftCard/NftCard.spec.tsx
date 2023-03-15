import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NftCard from "./NftCard";

describe("Nft Card", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <NftCard src='url("/assets/nft9.jpeg")' title="Clone X 12420" price="4.120 ETH" lastPrice="4.180 ETH" />
    );
    expect(baseElement).toBeTruthy();
  });

  it("should render title", () => {
    const { getByTestId } = render(
      <NftCard src='url("/assets/nft9.jpeg")' title="Clone X 12420" price="4.120 ETH" lastPrice="4.180 ETH" />
    );

    expect(getByTestId("title").textContent).toEqual("Clone X 12420");
  });

  it("should render price", () => {
    const { getByTestId } = render(
      <NftCard src='url("/assets/nft9.jpeg")' title="Clone X 12420" price="4.120 ETH" lastPrice="4.180 ETH" />
    );

    expect(getByTestId("price").textContent).toEqual("4.120 ETH");
  });

  it("should render lastPrice", () => {
    const { getByTestId } = render(
      <NftCard src='url("/assets/nft9.jpeg")' title="Clone X 12420" price="4.120 ETH" lastPrice="4.180 ETH" />
    );

    expect(getByTestId("lastprice").textContent).toEqual("Last Sale: 4.180 ETH");
  });

  it("should render bg image", () => {
    const { getByTestId } = render(
      <NftCard src='url("/assets/nft9.jpeg")' title="Clone X 12420" price="4.120 ETH" lastPrice="4.180 ETH" />
    );

    expect(window.getComputedStyle(getByTestId("nft-img")).backgroundImage).toBe("url(/assets/nft9.jpeg)");
  });

  it("should call onClick handler when card is clicked", () => {
    const mock = jest.fn();
    const { getByTestId } = render(
      <NftCard
        src='url("/assets/nft9.jpeg")'
        onClick={mock}
        title="Clone X 12420"
        price="4.120 ETH"
        lastPrice="4.180 ETH"
      />
    );

    userEvent.click(getByTestId("price"));

    expect(mock).toHaveBeenCalledTimes(1);
  });
});
